
import { Router } from 'express';
import health from './health.route';
import v1 from './v1';

const router = Router();

router.use('/health', health);
router.use('/api/v1', v1);

export default router;
