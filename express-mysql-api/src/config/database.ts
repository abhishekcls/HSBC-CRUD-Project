import { createConnection } from 'mysql2/promise';

export const connectToDatabase = async () => {
    const connection = await createConnection({
        host: 'localhost',
        user: 'root',
        password: 'n3u3da!',
        database: 'abhishek'
    });
    return connection;
};