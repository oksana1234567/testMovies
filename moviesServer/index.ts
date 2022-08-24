import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import moviesRouter from './routes/movies.router';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use('/api', moviesRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});