const express = require('express');

const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log('START MIDELWARE');
    next();
});

userRouter.get('/', (req, res) => {
    res.send('OPENT METHOD GET');
});

userRouter.post('/', (req, res) => {
    res.send('OPENT METHOD POST');
});

userRouter.delete('/', (req, res) => {
    res.send('OPENT METHOD DELETE');
});

userRouter.patch('/', (req, res) => {
    res.send('OPENT METHOD PATCH');
});

module.exports = userRouter;
