const express = require('express');
require('dotenv').config();
const PathClass = require('./constant/path_constant');
const userRouter = require('./router/user_router');

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use(PathClass.userPath, userRouter);

app.listen(port, error => {
    console.log(`Server zapushen na http"//localhost:5000`);
});
