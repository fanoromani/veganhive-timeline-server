import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function LoginUser(app: FastifyInstance) {
  app.post("/login", async (request, reply) => {
    try {
      const bodySchema = z.object({
        username: z.string(),
        password: z.string(),
      });

      const response = bodySchema.parse(request.body);

      const user = await prisma.user.findFirst({
        where: {
          username: response.username,
          password: response.password,
        },
      });

      if (!user) {
        reply.code(401).send({ error: "Wrong username or password." });
        return;
      }

      const token = app.jwt.sign({ userId: user.id });
      reply.send({ token, user });
    } catch (error) {
      reply.status(500).send({ error });
    }
  });
}
