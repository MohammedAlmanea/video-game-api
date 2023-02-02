import express from 'express';
import {
  addGame,
  getAllgames,
  deleteGame,
  gamesByGenre,
  gamesByStoryPlayTimeAscend,
  gamesByStoryPlayTimeDesc,
  updateGame,
  gamesByName,
  gamesByRating,
  gamesByPriceAscend,
  gamesByPriceDesc,
  gamesByRatingWithGenre,
} from '../controller/game.control';
import Validate from '../middleware/validate';
import { gameSchema } from '../zodSchema/game.schema';

const router = express.Router();

router.get('/games', getAllgames);
router.get('/games/:genre', gamesByGenre);
router.get('/games/name/:name', gamesByName);
router.get('/games/time/asc', gamesByStoryPlayTimeAscend);
router.get('/games/time/des', gamesByStoryPlayTimeDesc);
router.get('/games/price/asc', gamesByPriceAscend);
router.get('/games/price/des', gamesByPriceDesc);
router.get('/games/sort/rating', gamesByRating);
router.get('/games/sort/rating/:genre', gamesByRatingWithGenre);
router.post('/games', Validate(gameSchema), addGame);
router.delete('/games/:id', deleteGame);
router.put('/games/:id', Validate(gameSchema), updateGame);

export default router;
