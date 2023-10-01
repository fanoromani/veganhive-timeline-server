import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function CreateBuzz(app: FastifyInstance) {
  app.post("/buzz/:username", async (request, reply) => {
    try {
      const paramsSchema = z.object({
        username: z.string(),
      });
      const { username } = paramsSchema.parse(request.params);
      const user = await prisma.user.findFirst({
        where: {
          username: username,
        },
      });

      const bodySchema = z.object({
        body: z.string(),
      });

      const response = bodySchema.parse(request.body);

      if (user) {
        const newBuzz = await prisma.buzz.create({
          data: {
            body: response.body,
            userId: user.id,
          },
        });
        return newBuzz;
      }
    } catch (error) {
      // Handle errors and send an error response
      reply.status(500).send({ error });
    }
  });
}
