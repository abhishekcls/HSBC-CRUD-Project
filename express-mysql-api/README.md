# Express MySQL API

This project is an Express application that connects to a MySQL database and exposes a RESTful API for managing items.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd express-mysql-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your MySQL database and update the database configuration in `src/config/database.ts`.

## Usage

To start the application, run:
```
npm start
```

The application will be running on `http://localhost:3000`.

## API Endpoints

- `GET /items`: Retrieve all items.
- `POST /items`: Create a new item.

## License

This project is licensed under the MIT License.