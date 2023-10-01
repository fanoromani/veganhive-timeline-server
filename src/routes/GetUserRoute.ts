import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function GetUser(app: FastifyInstance) {
  app.get("/user/:username", async (request) => {
    const paramsSchema = z.object({
      username: z.string(),
    });
    const { username } = paramsSchema.parse(request.params);
    const user = prisma.user.findUniqueOrThrow({
      where: {
        username: username,
      },
    });

    return user;
  });
}
