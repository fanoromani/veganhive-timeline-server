import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function LikeBuzzRoute(app: FastifyInstance) {
  app.post("/buzz/:buzzId/like", async (request, reply) => {
    try {
      const paramsSchema = z.object({
        buzzId: z.string(),
      });
      const { buzzId } = paramsSchema.parse(request.params);

      const bodySchema = z.object({
        userId: z.string(),
      });

      const { userId } = bodySchema.parse(request.body);

      const buzz = await prisma.buzz.findFirst({
        where: {
          id: buzzId,
        },
      });
      if (!buzz) {
        return reply.code(404).send({ error: "buzz not found" });
      }

      const userLiked = await prisma.buzz.findFirst({
        where: {
          id: buzzId,
          userId: userId,
        },
      });

      if (userLiked) {
        await prisma.like.delete({
          where: {
            id: userLiked.id,
          },
        });
        const updatedbuzz = await prisma.buzz.update({
          where: {
            id: buzzId,
          },
          data: {
            likes: buzz.likes - 1,
          },
        });
        return updatedbuzz;
      } else {
        await prisma.like.create({
          data: {
            buzzId: buzzId,
            userId: userId,
          },
        });

        const updatedbuzz = await prisma.buzz.update({
          where: {
            id: buzzId,
          },
          data: {
            likes: buzz.likes + 1,
          },
        });
        return updatedbuzz;
      }
    } catch (error) {
      // Handle errors and send an error response
      reply.status(500).send({ error });
    }
  });
}
