import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function RegisterUser(app: FastifyInstance) {
  app.post("/register", async (request, reply) => {
    try {
      const bodySchema = z.object({
        username: z.string(),
        password: z.string(),
      });

      const response = bodySchema.parse(request.body);

      const existingUser = await prisma.user.findFirst({
        where: {
          username: response.username,
        },
      });
      if (existingUser) {
        reply
          .code(400)
          .send({ error: "User with this username already exists" });
        return;
      }

      const newUser = await prisma.user.create({
        data: {
          username: response.username,
          password: response.password,
        },
      });

      const token = app.jwt.sign({ userId: newUser.id });
      reply.send({ token, newUser });
    } catch (error) {
      // Handle errors and send an error response
      reply.status(500).send({ error });
    }
  });
}
