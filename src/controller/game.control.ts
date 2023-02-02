import { Game } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const addGame = async (req: Request, res: Response) => {
  try {
    let newGame = req.body as Game;
    newGame.name = newGame.name.toUpperCase()
    await prisma.game.create({
      data: newGame,
    });
    res.status(200).json({
      message: 'Game created',
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const getAllgames = async (req: Request, res: Response) => {
  try {
    const games = await prisma.game.findMany();
    if(games.length === 0)
    {
      res.status(404).json({message:'There is no games'})
    }
    res.status(200).json(games);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const updateGame = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const update = req.body as Game;
    await prisma.game.update({
      where: { id: id },
      data: update,
    });
    res.status(200).json({
      message: 'Game updated',
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const deleteGame = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.game.delete({
      where: { id: id },
    });
    res.status(200).json({
      message: 'Game deleted',
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const gamesByStoryPlayTimeDesc = async (req: Request, res: Response) => {
  try {
    const games = await prisma.game.findMany({
      orderBy: { story_playtime: 'desc' },
    });
    if (games.length === 0) {
      res.status(404).json({ message: 'There is no games' });
    }
    res.status(200).json(games);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const gamesByStoryPlayTimeAscend = async (
  req: Request,
  res: Response
) => {
  try {
    const games = await prisma.game.findMany({
      orderBy: { story_playtime: 'asc' },
    });
    if (games.length === 0) {
      res.status(404).json({ message: 'There is no games' });
    }
    res.status(200).json(games);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const gamesByRating = async (req: Request, res: Response) => {
  try {
    const games = await prisma.game.findMany({
      orderBy: { rating: 'desc' },
    });
    if (games.length === 0) {
      res.status(404).json({ message: 'There is no games' });
    }
    res.status(200).json(games);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const gamesBySales = async (req: Request, res: Response) => {
  try {
    const games = await prisma.game.findMany({
      orderBy: { sales: 'desc' },
    });
    if (games.length === 0) {
      res.status(404).json({ message: 'There is no games' });
    }
    res.status(200).json(games);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const gamesByName = async (req: Request, res: Response) => {
  try {
    const { name } = (req.params as unknown as string).toUpperCase;

    const games = await prisma.game.findMany({
      where: { name: name },
    });
    if (games.length === 0) {
      res.status(404).json({ message: 'There is no games With this name' });
    }
    res.status(200).json(games);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const gamesByGenre = async (req: Request, res: Response) => {
  try {
    const { gameGenre } = req.params;
    console.log(gameGenre);

    const games = await prisma.game.findMany({
      where: { genre: gameGenre },
    });
    res.status(200).json(games);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};
