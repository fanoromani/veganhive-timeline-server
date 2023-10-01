import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function CreateBuzz(app: FastifyInstance) {
  app.post(
    "/buzz",
    { onRequest: [app.authenticate] },
    async (request, reply) => {
      // @ts-expect-error
      const { userId } = request.user;
      try {
        const user = await prisma.user.findFirst({
          where: {
            id: userId,
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
        reply.status(500).send({ error });
      }
    }
  );
}
