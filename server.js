import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import { sequelize } from './db/database.js';
import rankRouter from './router/rank.js';
import { config } from './config.js';


const app = express();
const corsOption = {
    origin: config.cors.allowedOrigin,
    optionsSuccessStatus: 200,
}
app.use(express.json());
app.use(helmet());
app.use(cors(corsOption));
app.use(morgan('tiny'));

app.use('/rank', rankRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
})
app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
})

sequelize.sync().then(() => {
    console.log(`server started at ${new Date()}`);
    const server = app.listen(8080);
})
