import { FastifyInstance } from "fastify";
import { FastifyReply, FastifyRequest } from "fastify";
import fp from "fastify-plugin";

export default fp(async function (fastify: FastifyInstance) {
  fastify.decorate(
    "authenticate",
    async function (request: FastifyRequest, reply: FastifyReply) {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    }
  );
});
