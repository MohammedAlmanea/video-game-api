import { TypeOf, z } from 'zod';

export const savedGamesSchema = z.object({
  body: z.object({
    user_id: z.string({
      required_error: 'user_id is required',
      invalid_type_error: 'user_is must be a string',
    }),
    game_id: z.string({
      required_error: 'game_id is required',
      invalid_type_error: 'game_is must be a string',
    }),
  })
});


export type SavedGamestypeSchema = TypeOf<typeof savedGamesSchema>['body'];
