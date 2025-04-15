const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Sequelize with MySQL
const sequelize = new Sequelize('bookstore', 'root', 'Mycourse123#', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define Book model
const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  publication_year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: false,
});

// Sync database
(async () => {
  await sequelize.sync({ force: true }); // Creates table, use { alter: true } in production
})();

// CRUD Routes
// Get all books
app.get('/books', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// Add a new book
app.post('/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a book by ID
app.get('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Update a book
app.put('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.update(req.body);
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Delete a book
app.delete('/books/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.destroy();
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});