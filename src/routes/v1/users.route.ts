
import { Router } from 'express';
import { z } from 'zod';
import { getUsers, postUser } from '../../controllers/users.controller';
import { validate } from '../../middlewares/validate';

const router = Router();

const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

router.get('/', getUsers);
router.post('/', validate(createUserSchema), postUser);

export default router;
