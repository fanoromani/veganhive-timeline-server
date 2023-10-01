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
      const jwtSecret = process.env.JWT_SECRET_KEY;

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

      const jwt = require("jsonwebtoken");
      const token = jwt.sign({ userId: user.id }, jwtSecret);
      reply.code(201).send({ token, user: user });

      return user;
    } catch (error) {
      // Handle errors and send an error response

      reply.status(500).send({ error });
    }
  });
}
