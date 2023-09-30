import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { GetBuzzes } from "./routes/GetBuzzesRoute";
import { CreateBuzz } from "./routes/CreateBuzzRoute";
import { GetBuzz } from "./routes/GetBuzzRoute";
import { CreateComment } from "./routes/CreateCommentRoute";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(GetBuzzes);
app.register(GetBuzz);
app.register(CreateBuzz);
app.register(CreateComment);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running");
  });
