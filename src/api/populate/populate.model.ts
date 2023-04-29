import * as z from 'zod';
import { db } from '../../db';
import { WithId } from 'mongodb';

export const Populate = z.object({
  postId: z.number().min(1),
  id: z.number().min(1),
  name: z.string().default(''),
  email: z.string(),
  body: z.string(),
});

export type Populate = z.infer<typeof Populate>;
export type PopulateWithId = WithId<Populate>;
export const Populates = db.collection<Populate>('populated-data');

// {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },
