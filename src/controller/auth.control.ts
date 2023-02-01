import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export const Register = async (req: Request, res: Response) => {
  try {
    const newUser = req.body as User;

    await prisma.user.create({
      data: newUser,
    });
    res.status(201).json({
      message: ' added user successfully',
    });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const Login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const login = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
    res.status(200).json(login);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};


