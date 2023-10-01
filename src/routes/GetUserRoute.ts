import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function GetUser(app: FastifyInstance) {
  app.get("/me", { onRequest: [app.authenticate] }, async (request) => {
    // @ts-expect-error
    const { userId } = request.user;

    const user = prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
    });

    return user;
  });
}
