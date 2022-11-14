import { PrismaClient } from "@prisma/client";
import { KaliopeModel } from "./models";

export const { Book, BookRating, Comment, Post, User } = KaliopeModel;

export const kaliopeClient = new PrismaClient();

export interface Context {
  kaliope: PrismaClient;
}

export const kaliopeContext: Context = { kaliope: kaliopeClient };
