# Bookstore App

A simple web application for managing a collection of books using Node.js, Express, Sequelize (ORM), and MySQL on the backend, with a styled HTML/CSS/JavaScript frontend. The app supports full CRUD operations (Create, Read, Update, Delete) without writing raw SQL queries, demonstrating Object-Relational Mapping (ORM) for a web development class.

## Features
- **Create**: Add new books with title, author, and optional publication year.
- **Read**: Display a list of all books.
- **Update**: Edit existing books via a modal form.
- **Delete**: Remove books from the collection.
- **Frontend**: Responsive design with a clean, modern UI using flexbox, modals, and CSS transitions.
- **Backend**: RESTful API with Sequelize ORM to handle MySQL database operations.

## Prerequisites
- **Node.js** (v14 or higher)
- **MySQL** (v8 or higher) running locally
- **Web Browser** (Chrome, Firefox, etc.)
- Basic familiarity with JavaScript, HTML, CSS, and MySQL

## Setup Instructions

### 1. Clone or Create the Project
- Create a project directory (e.g., `bookstore-app`).
- Save the provided files (`index.js`, `index.html`) into this directory.
- Alternatively, clone the repository if hosted (not applicable here).

### 2. Backend Setup
1. **Initialize Node.js Project**:
   ```bash
   cd bookstore-app
   npm init -y
   ```
2. **Install Dependencies**:
   ```bash
   npm install express sequelize mysql2 cors
   ```
3. **Configure MySQL**:
   - Start your MySQL server.
   - Create a database named `bookstore`:
     ```sql
     CREATE DATABASE bookstore;
     ```
   - Open `index.js` and update the Sequelize configuration with your MySQL credentials:
     ```javascript
     const sequelize = new Sequelize('bookstore', 'root', 'your_password_here', {
       host: 'localhost',
       dialect: 'mysql',
     });
     ```
4. **Run the Backend**:
   ```bash
   node index.js
   ```
   - The server runs on `http://localhost:3000`.

### 3. Frontend Setup
1. **Save Frontend File**:
   - Ensure `index.html` is in the project directory.
2. **Serve the Frontend**:
   - Use a static server:
     ```bash
     npx serve
     ```
   - Or use a browser extension like "Web Server for Chrome".
   - Alternatively, open `index.html` directly, but ensure the backend is running to handle API requests.
3. **Access the App**:
   - Open `http://localhost:3000` (or the port provided by your static server) in a browser.

### 4. File Structure
```
bookstore-app/
├── index.js        # Backend (Node.js/Express/Sequelize)
├── index.html      # Frontend (HTML/CSS/JavaScript)
├── package.json    # Node.js dependencies
└── README.md       # This file
```

## Usage
- **Open the App**: Navigate to the frontend URL (e.g., `http://localhost:3000`).
- **Add a Book** (Create):
  - Fill in the form (title and author required, publication year optional).
  - Click "Add Book".
- **View Books** (Read):
  - Books are listed below the form, showing title, author, and year (or "N/A").
- **Edit a Book** (Update):
  - Click the yellow "Edit" button next to a book.
  - Update fields in the modal form.
  - Click "Update Book" to save or "Cancel" to close.
- **Delete a Book** (Delete):
  - Click the red "Delete" button next to a book to remove it.
- **Responsive Design**: The app adapts to mobile devices, stacking form inputs and list items.

## API Endpoints
The backend provides a RESTful API at `http://localhost:3000`:
- `GET /books`: Retrieve all books.
- `POST /books`: Create a new book (body: `{ "title": "string", "author": "string", "publication_year": number|null }`).
- `GET /books/:id`: Retrieve a book by ID.
- `PUT /books/:id`: Update a book (body: same as POST).
- `DELETE /books/:id`: Delete a book.

Test with curl or Postman, e.g.:
```bash
curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","publication_year":1925}'
```

## Notes
- **Security**: This is a basic app for learning. In production, add input validation, error handling, and authentication.
- **Database**: The backend uses `{ force: true }` to recreate the table on startup. Use `{ alter: true }` or migrations in production to preserve data.
- **CORS**: Enabled for development. Restrict origins in production.
- **Styling**: Customize colors or layouts in `index.html`’s `<style>` section.
- **Extensibility**: Add features like search, sorting, or additional fields (e.g., ISBN).

## Troubleshooting
- **Backend Errors**:
  - Ensure MySQL is running and credentials are correct.
  - Check `package.json` dependencies are installed.
- **Frontend Errors**:
  - Verify the backend is running at `http://localhost:3000`.
  - Use browser developer tools (F12) to debug JavaScript or network issues.
- **CORS Issues**:
  - The backend includes CORS middleware. Ensure API_URL in `index.html` matches the backend port.

## License
This project is for educational purposes and not licensed for production use.

---

Built for a web development class to demonstrate ORM with Sequelize and CRUD operations in a web app.