import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function CreateUser(app: FastifyInstance) {
  app.post("/", async (request, reply) => {
    try {
      const bodySchema = z.object({
        username: z.string(),
        password: z.string(),
      });

      const response = bodySchema.parse(request.body);

      const newUser = await prisma.user.create({
        data: {
          username: response.username,
          password: response.password,
        },
      });

      return newUser;
    } catch (error) {
      // Handle errors and send an error response
      reply.status(500).send({ error });
    }
  });
}
