import express from 'express';
import {
  saveGame,
  deleteSave,
  getSavedGames,
} from '../controller/savedgames.control';
import Validate from '../middleware/validate';
import { savedGamesSchema } from '../zodSchema/savedgames.schema';

const router = express.Router();

router.post('/games/save', Validate(savedGamesSchema), saveGame);
router.get('/games/save/:id', getSavedGames);
router.delete('/games/save/:id', deleteSave);

export default router;
