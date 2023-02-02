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
  gamesByPriceAscend,
  gamesByPriceDesc,
} from '../controller/game.control';
import Validate from '../middleware/validate';
import { gameSchema } from '../zodSchema/game.schema';

const router = express.Router();

router.get('/games', getAllgames);
router.get('/games/:genre', gamesByGenre);
router.get('/games/name/:name', gamesByName);
router.get('/games/sort/asc', gamesByStoryPlayTimeAscend);
router.get('/games/sort/des', gamesByStoryPlayTimeDesc);
router.get('/games/sort/sales', gamesBySales);
router.get('/games/sort/price/asc', gamesByPriceAscend);
router.get('/games/sort/price/des', gamesByPriceDesc);
router.get('/games/sort/rating', gamesByRating);
router.post('/games', Validate(gameSchema), addGame);
router.delete('/games/:id', deleteGame);
router.put('/games/:id', Validate(gameSchema), updateGame);

export default router;
