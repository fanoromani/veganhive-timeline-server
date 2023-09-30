import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function CreateComment(app: FastifyInstance) {
  app.post("/comment/:userId/:buzzId", async (request, reply) => {
    try {
      const paramsSchema = z.object({
        userId: z.string(),
        buzzId: z.string(),
      });
      const { userId, buzzId } = paramsSchema.parse(request.params);

      const bodySchema = z.object({
        body: z.string(),
      });

      const response = bodySchema.parse(request.body);

      const newComment = await prisma.comment.create({
        data: {
          body: response.body,
          buzzId: buzzId,
          userId: userId,
        },
      });

      return newComment;
    } catch (error) {
      // Handle errors and send an error response
      reply.status(500).send({ error });
    }
  });
}
