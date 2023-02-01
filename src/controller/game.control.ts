import { Game } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const addGame = async (req: Request, res: Response) => {
  try {
    const newGame = req.body as Game;
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
    const { name } = req.params;
    const games = await prisma.game.findMany({
      where: { name: name },
    });
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
