import { TypeOf, z } from 'zod';

export const RegisterSchema = z.object({
  body: z.object({
    username: z
      .string({
        required_error: 'Username is required',
        invalid_type_error: 'Username must be a string',
      }),
    password: z.string({ required_error: 'Password is required' }).min(8,'Password length must be 8 or longer'),
    email: z
      .string({
        required_error: 'email is required',
        invalid_type_error: 'Please enter an email',
      })
      .email(),
  }),
});

export const LoginSchema = z.object({
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
});

export type RegistertypeSchema = TypeOf<typeof RegisterSchema>['body'];
export type LogintypeSchema = TypeOf<typeof LoginSchema>['body'];
