
import { Router } from 'express';
import users from './users.route';
import posts from './posts.route';

const router = Router();

router.use('/users', users);
router.use('/posts', posts);

export default router;
