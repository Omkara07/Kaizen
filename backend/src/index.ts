import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import sequelize from './config/db';
import formRoutes from './routes/formRoutes';
import authRoutes from './routes/authRoutes';

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', formRoutes);
app.use('/', authRoutes);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK' });
});

// Database connection and server start
const PORT: number = parseInt(process.env.PORT || '5000', 10);

const startServer = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');
        await sequelize.sync({ force: false });
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1);
    }
};

startServer();