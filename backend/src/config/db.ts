import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
import { Form } from '../models/form';
import * as fs from 'fs';

// Loading environment variables from .env file
dotenv.config();
const sequelize = new Sequelize(process.env.DB_URI as string, {
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: true,
            ca: fs.readFileSync(process.env.DB_CA_CERT_PATH || './ca-cert.pem'),
        },
    },
    logging: process.env.NODE_ENV === 'production' ? false : console.log,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    models: [Form],
});

export default sequelize;