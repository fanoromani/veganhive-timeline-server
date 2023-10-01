import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function GetComments(app: FastifyInstance) {
  app.get("/comments/:buzzId", async (request) => {
    const paramsSchema = z.object({
      buzzId: z.string(),
    });
    const { buzzId } = paramsSchema.parse(request.params);
    const comments = prisma.comment.findMany({
      where: {
        buzzId: buzzId,
      },
      include: {
        author: true,
        whoLiked: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return comments;
  });
}
