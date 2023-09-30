import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function GetBuzzes(app: FastifyInstance) {
  app.get("/buzzes", async () => {
    const buzzes = prisma.buzz.findMany({
      include: {
        author: true,
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return buzzes;
  });
}
