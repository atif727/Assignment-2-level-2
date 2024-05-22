import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { KBRoutes } from './app/modules/KBS/KB.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application

app.use('/api/products', KBRoutes);

const getAcontroller = (req: Request, res: Response) => {
  res.send('erm hii..');
};

app.get('/', getAcontroller);

export default app;
