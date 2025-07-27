import mysql from 'mysql2/promise';
import { connectToDatabase } from '../config/database'; // Adjust the path as necessary
class IndexController {
    private db!: mysql.Connection;

    constructor() {
        // Initialize the MySQL connection
        this.initDB();
    }

    private async initDB() {
        //const connectionConfig = await connectToDatabase();
        //this.db = await mysql.createConnection(connectionConfig as mysql.ConnectionOptions);
        this.db = await connectToDatabase();
        console.log('Database connected successfully');
    }
    async getItems(req:any, res:any) {
        // Logic to retrieve items from the database
        // For demonstration, we will return a static response
        // In a real application, you would fetch items from a database
        try {

            const [rows] = await this.db.query('SELECT * FROM items'); // Replace 'items' with your table name
            //res.json({ message: "Items retrieved successfully", data: rows });
            //res.json({data: rows});
            res.json(rows);
        } catch (error) {
            console.error('Error retrieving items:', error);
            res.status(500).json({ message: "Error retrieving items" });
        }
    }

    async createItem(req:any, res:any) {
        // Logic to create a new item in the database
        const { id, name, description } = req.body; // Assuming the request body contains these fields
        console.log('Creating item with data:', { id, name, description });
        try {
            await this.db.query('INSERT INTO items (id, name, description) VALUES (?, ?, ?)', [id, name, description]); // Replace 'items' with your table name
        } catch (error) {
            console.error('Error creating item:', error);
            return res.status(500).json({ message: "Error creating item" });
        }
        //res.json({ message: "Item created successfully" });
        res.json({ message: "Item created successfully" });
    }
}

export default IndexController;