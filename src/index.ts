const express = require('express');
require('dotenv').config();
const PathClass = require('./constant/path_constant');
const userRouter = require('./router/user_router');

import type { Express } from 'express';

const port = process.env.PORT || 5000;
const app: Express = express();
app.use(express.json());

app.use(PathClass.userPath, userRouter);

app.listen(port, () => {
    console.log(`Server started in http//localhost:5000`);
});
