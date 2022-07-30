import express, {Router} from 'express';
import 'express-async-errors';
import * as rankController from '../controller/ranklogic.js';

const router = express.Router();

router.get('/', rankController.getRanks);
router.post('/', rankController.createRank);
router.delete('/', rankController.deleteRank);

export default router;