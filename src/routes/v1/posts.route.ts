
import { Router } from 'express';
import { z } from 'zod';
import { getPosts, addPost } from '../../controllers/posts.controller';
import { validate } from '../../middlewares/validate';

const router = Router();

const createPostSchema = z.object({
  name: z.string().min(1),
  description: z.string().email(),
});

router.get('/', getPosts);
router.post('/', validate(createPostSchema), addPost);

export default router;