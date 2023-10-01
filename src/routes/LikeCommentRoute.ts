import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function LikeCommentRoute(app: FastifyInstance) {
  app.post("/comment/:commentId/like", async (request, reply) => {
    try {
      const paramsSchema = z.object({
        commentId: z.string(),
      });
      const { commentId } = paramsSchema.parse(request.params);

      const bodySchema = z.object({
        userId: z.string(),
      });

      const { userId } = bodySchema.parse(request.body);

      /* const headersSchema = z.object({
        token: z.string(),
      });

      const { token } = headersSchema.parse(request.headers); */

      const comment = await prisma.comment.findFirst({
        where: {
          id: commentId,
        },
      });
      if (!comment) {
        return reply.code(404).send({ error: "Comment not found" });
      }

      const userLiked = await prisma.like.findFirst({
        where: {
          userId: userId,
        },
      });

      if (userLiked) {
        await prisma.like.deleteMany({
          where: {
            userId: userLiked.id,
          },
        });
        const updatedComment = await prisma.comment.update({
          where: {
            id: commentId,
          },
          data: {
            likes: comment.likes - 1,
          },
        });
        return updatedComment;
      } else {
        await prisma.like.create({
          data: {
            commentId: commentId,
            userId: userId,
          },
        });

        const updatedComment = await prisma.comment.update({
          where: {
            id: commentId,
          },
          data: {
            likes: comment.likes + 1,
          },
        });
        return updatedComment;
      }
    } catch (error) {
      // Handle errors and send an error response
      reply.status(500).send({ error });
    }
  });
}
