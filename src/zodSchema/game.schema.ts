import { TypeOf, z } from 'zod';

export const gameSchema = z.object({
  body: z.object({
    image: z.string({
      required_error: 'Image is required',
      invalid_type_error: 'Image must be a string',
    }),
    name: z.string({
      required_error: 'name is required',
      invalid_type_error: 'name must be a string',
    }),
    genre: z.string({
      required_error: 'genre is required',
      invalid_type_error: 'genre must be a string',
    }),
    description: z
      .string({
        required_error: 'description is required',
        invalid_type_error: 'description must be a string',
      })
      .min(10, 'description must be at least 10 characters long')
      .max(50, 'description must be at most 50 characters long'),
    story_playtime: z
      .number({
        required_error: 'story_playtime is required',
        invalid_type_error: 'story_playtime must be a number',
      })
      .min(1, 'story_playtime must be greater than or equal to 1'),
    sales: z
      .number({
        required_error: 'sales is required',
        invalid_type_error: 'sales must be a number',
      })
      .min(1, 'sales must be greater than or equal to 1'),
    rating: z
      .number({
        required_error: 'rating is required',
        invalid_type_error: 'rating must be a number',
      })
      .min(0, 'rating must be greater than or equal to 0')
      .max(100, 'rating must be at most 100'),
  }),
});


export type GametypeSchema = TypeOf<typeof gameSchema>['body'];
