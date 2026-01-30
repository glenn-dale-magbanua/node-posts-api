
import { Request, Response, NextFunction } from 'express';
import { createPost, listPosts } from '../services/posts.service';

export function getPosts(_req: Request, res: Response) {
  res.json({ data: listPosts() });
}

export function addPost(req: Request, res: Response, next: NextFunction) {
  try {
    const user = createPost(req.body);
    res.status(201).json({ data: user });
  } catch (err) {
    next(err);
  }
}