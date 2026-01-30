
import { Request, Response, NextFunction } from 'express';
import { createUser, listUsers } from '../services/users.service';

export function getUsers(_req: Request, res: Response) {
  res.json({ data: listUsers() });
}

export function postUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = createUser(req.body);
    res.status(201).json({ data: user });
  } catch (err) {
    next(err);
  }
}
