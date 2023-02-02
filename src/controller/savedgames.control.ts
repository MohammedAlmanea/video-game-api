import { Game, UserSavedGames } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const saveGame = async (req: Request, res: Response) => {
  try {
    const game = req.body as UserSavedGames;
    await prisma.userSavedGames.create({
      data: game,
    });
    res.status(200).json({
      message: 'Game saved',
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const deleteSave = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.userSavedGames.delete({
      where: { id: id },
    });
    res.status(200).json({
      message: 'Save deleted',
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const getSavedGames = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const games = await prisma.userSavedGames.findMany({
      where: { user_id: id },
      select: {
        id: true,
        game: {
          select: {
            name: true,
            image: true,
            genre: true,
            description: true,
            price:true,
            rating: true,
          },
        },
      },
    });
    res.status(200).json(games);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};
