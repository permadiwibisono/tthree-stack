import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { prisma } from '@/lib/db';

export async function createContext(_?: trpcNext.CreateNextContextOptions) {
  return { prisma };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
