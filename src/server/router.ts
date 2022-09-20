import * as trpc from '@trpc/server';
import { z } from 'zod';

import { Context } from './context';

export const serverRouter = trpc
  .router<Context>()
  .query('findAll', {
    resolve: async ({ ctx }) => {
      const result = await ctx.prisma.grocery.findMany();
      return result;
    }
  })
  .mutation('insertOne', {
    input: z.object({
      title: z.string()
    }),
    resolve: async ({ input, ctx }) => {
      const result = ctx.prisma.grocery.create({
        data: { title: input.title }
      });
      return result;
    }
  })
  .mutation('updateOne', {
    input: z.object({
      id: z.number(),
      title: z.string(),
      checked: z.boolean()
    }),
    resolve: async ({ input, ctx }) => {
      const { id, ...rest } = input;
      const result = ctx.prisma.grocery.update({
        where: { id },
        data: { ...rest }
      });
      return result;
    }
  })
  .mutation('deleteAll', {
    input: z.object({
      ids: z.number().array()
    }),
    resolve: async ({ input, ctx }) => {
      const { ids } = input;
      const result = await ctx.prisma.grocery.deleteMany({
        where: {
          id: { in: ids }
        }
      });
      return result;
    }
  });

export type ServerRouter = typeof serverRouter;
