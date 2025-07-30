const mysql = require('mysql2/promise');
const { connectToDatabase } = require('../config/database');

class IndexController {
    constructor() {
        this.initDB();
    }

    async initDB() {
        this.db = await connectToDatabase();
        console.log('Database connected successfully');
    }

    async getItems(req, res) {
        try {
            const [rows] = await this.db.query('SELECT * FROM items');
            res.json(rows);
        } catch (error) {
            console.error('Error retrieving items:', error);
            res.status(500).json({ message: "Error retrieving items" });
        }
    }

    async createItem(req, res) {
        const { id, name, description } = req.body;
        console.log('Creating item with data:', { id, name, description });
        try {
            await this.db.query('INSERT INTO items (id, name, description) VALUES (?, ?, ?)', [id, name, description]);
        } catch (error) {
            console.error('Error creating item:', error);
            return res.status(500).json({ message: "Error creating item" });
        }
        res.json({ message: "Item created successfully" });
    }
}

module.exports = IndexController;