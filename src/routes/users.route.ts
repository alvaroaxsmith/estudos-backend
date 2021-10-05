import { NextFunction, Request, Response, Router  } from "express";
import { StatusCodes } from 'http-status-codes';

// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) =>{
    const users = [{ userName: 'Alvaro' }];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
});

export default usersRoute;
