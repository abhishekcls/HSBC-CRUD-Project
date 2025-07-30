class Item {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static async findAll(connection) {
        const [rows] = await connection.query('SELECT * FROM items');
        return rows.map(row => new Item(row.id, row.name, row.description));
    }

    static async create(connection, itemData) {
        const [result] = await connection.query('INSERT INTO items (name, description) VALUES (?, ?)', [itemData.name, itemData.description]);
        return new Item(result.insertId, itemData.name, itemData.description);
    }
}

module.exports = Item;