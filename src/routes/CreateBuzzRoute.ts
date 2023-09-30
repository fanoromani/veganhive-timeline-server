import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function CreateBuzz(app: FastifyInstance) {
  app.post("/buzz/:userId", async (request, reply) => {
    try {
      const paramsSchema = z.object({
        userId: z.string(),
      });
      const { userId } = paramsSchema.parse(request.params);

      const bodySchema = z.object({
        body: z.string(),
      });

      const response = bodySchema.parse(request.body);

      const newBuzz = await prisma.buzz.create({
        data: {
          body: response.body,
          userId: userId,
        },
      });

      return newBuzz;
    } catch (error) {
      // Handle errors and send an error response
      reply.status(500).send({ error });
    }
  });
}
