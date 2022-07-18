import * as express from 'express';
import cricketDataController from './cricket-data.controller';

const router = express.Router();

router.get('/getCricketData', cricketDataController.getMatchData);
router.post('/addCricketData', cricketDataController.addCricketData);

export default router;