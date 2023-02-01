import express from 'express';
import authRouter from './routers/auth.router';
import gameRouter from './routers/game.router';
import savedGamesRouter from './routers/savedgames.router';
import { connectDB } from './config/db';
const app = express();
const PORT = 5600;
app.use(express.json());

connectDB();
app.use('/api/', authRouter);
app.use('/api/', gameRouter);
app.use('/api/', savedGamesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
