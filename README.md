Library API
A RESTful API for managing a library's book collection built with Node.js, Express, and MongoDB.
Features

CRUD operations for books
Data validation using Joi
Pagination for book listings
Error handling
MongoDB for data persistence

Requirements

Node.js (v14+)
MongoDB

Installation

Clone the repository:
git clone https://github.com/yourusername/library-api.git
cd library-api

Install dependencies:
npm install

Create a .env file in the root directory with the following variables:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/library-api

Make sure MongoDB is running on your system.

Running the API
To start the server in development mode:
npm start

The API will be available at http://localhost:3000.
## 📘 API Endpoints – Books

| Method | Endpoint       | Description                          |
|--------|----------------|--------------------------------------|
| GET    | `/books`       | Retrieve all books (with pagination) |
| GET    | `/books/:id`   | Get a specific book by ID            |
| POST   | `/books`       | Create a new book                    |
| PUT    | `/books/:id`   | Update a book by ID                  |
| DELETE | `/books/:id`   | Delete a book by ID                  |

page: Page number (default: 1)
limit: Number of results per page (default: 10)

Book Data Structure
json{
  "title": "Book Title",
  "author": "Author Name",
  "year": 2023,
  "genre": "Fiction"
}
Sample API Requests
Get all books
GET /books
Get a specific book
GET /books/60d21b4667d0d8992e610c85
Create a new book
POST /books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925,
  "genre": "Classic Fiction"
}
Update a book
PUT /books/60d21b4667d0d8992e610c85
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925,
  "genre": "American Literature"
}
Delete a book
DELETE /books/60d21b4667d0d8992e610c85
Error Handling
The API returns appropriate status codes and error messages:

400 - Bad Request (validation errors)
404 - Resource Not Found
500 - Server Error


