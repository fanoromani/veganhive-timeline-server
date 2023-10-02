import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function GetUser(app: FastifyInstance) {
  app.get("/me", { onRequest: [app.authenticate] }, async (request) => {
    // @ts-expect-error
    const { userId } = request.user;

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
      include: {
        Buzz: true,
      },
    });

    return {
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      description: user.description,
      buzzes: user.Buzz.length,
    };
  });
}
