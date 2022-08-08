import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import gameRoutes from "./routes/game.js";
import authRoutes from "./routes/auth.js";
import teamRoutes from "./routes/team.js";
import refereeRoutes from "./routes/referee.js";
import { connectDb } from './config/connectDb.js';
import morgan from 'morgan';

const app = express();

connectDb(app);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/auth', authRoutes);
app.use('/games', gameRoutes);
app.use('/teams', teamRoutes);
app.use('/referees', refereeRoutes);