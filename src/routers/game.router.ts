import express from 'express';
import {
  addGame,
  getAllgames,
  deleteGame,
  gamesByGenre,
  gamesBySales,
  gamesByStoryPlayTimeAscend,
  gamesByStoryPlayTimeDesc,
  updateGame,
  gamesByName,
  gamesByRating,
} from '../controller/game.control';
import Validate from '../middleware/validate';
import { gameSchema } from '../zodSchema/game.schema';

const router = express.Router();

router.get('/games', getAllgames);
router.get('/games/:genre', gamesByGenre);
router.get('/games/name/:name', gamesByName);
router.get('/games/asc', gamesByStoryPlayTimeAscend);
router.get('/games/sales', gamesBySales);
router.get('/games/rating', gamesByRating);
router.get('/games/desc', gamesByStoryPlayTimeDesc);
router.post('/games', Validate(gameSchema), addGame);
router.delete('/games/:id', deleteGame);
router.put('/game/:id', Validate(gameSchema), updateGame);

export default router;
