const { Router } = require('express');
const userRouter = Router();
const {
    getUserData,
    getOneUser,
} = require('../controllers/user_controller/user_controller');
import type { Request, Response, NextFunction } from 'express';

// Миддлвар для обработки ошибок
function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.status(400).json({ error: err.message });
}

userRouter.use((req: Request, res: Response, next: NextFunction) => {
    console.log('START MIDELWARE');
    next();
});

userRouter.get('/', (req: Request, res: Response) => {
    const data = getUserData(req);
    res.status(200).json(data);
});
userRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = getOneUser(req);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

userRouter.post('/', (req: Request, res: Response) => {
    res.send('OPENT METHOD POST');
});

userRouter.delete('/', (req: Request, res: Response) => {
    res.send('OPENT METHOD DELETE');
});

userRouter.patch('/', (req: Request, res: Response) => {
    res.send('OPENT METHOD PATCH');
});
// Подключаем обработчик ошибок в конце
userRouter.use(errorHandler);

module.exports = userRouter;
