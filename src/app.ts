import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/student.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application

app.use('/api/v1/students', StudentRoutes);

const getAcontroller = (req: Request, res: Response) => {
  res.send('erm what the sigma');
};

app.get('/', getAcontroller);

export default app;
