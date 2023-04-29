import { Router } from 'express';
import * as PopulateHandlers from './populate.handlers';

const router = Router();

router.get('/', PopulateHandlers.fetchDataFromApi);
router.post('/', PopulateHandlers.searchDataFromApi);

export default router;