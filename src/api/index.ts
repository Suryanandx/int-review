import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import populates from './populate/populate.routes';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/populate', populates);
export default router;
