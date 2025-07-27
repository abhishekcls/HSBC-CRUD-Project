import express from 'express';
import { connectToDatabase } from './config/database';
import cors from 'cors';
import { setRoutes } from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

app.use(express.json());

connectToDatabase()
    .then(() => {
        console.log('Connected to the database');
        setRoutes(app);
        
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection failed:', err);
    });