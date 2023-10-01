import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function GetBuzz(app: FastifyInstance) {
  app.get("/buzz/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    });
    const { id } = paramsSchema.parse(request.params);
    const buzz = prisma.buzz.findUniqueOrThrow({
      where: {
        id: id,
      },
      include: {
        author: true,
        comments: true,
        whoLiked: true,
      },
    });

    return buzz;
  });
}
