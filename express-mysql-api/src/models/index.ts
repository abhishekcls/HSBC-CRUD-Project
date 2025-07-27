class Item {
    constructor(public id: number, public name: string, public description: string) {}

    static async findAll(connection: any): Promise<Item[]> {
        const [rows] = await connection.query('SELECT * FROM items');
        return rows.map((row: any) => new Item(row.id, row.name, row.description));
    }

    static async create(connection: any, itemData: { name: string; description: string }): Promise<Item> {
        const [result] = await connection.query('INSERT INTO items (name, description) VALUES (?, ?)', [itemData.name, itemData.description]);
        return new Item(result.insertId, itemData.name, itemData.description);
    }
}

export default Item;