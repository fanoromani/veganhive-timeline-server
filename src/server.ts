import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { GetBuzzes } from "./routes/GetBuzzesRoute";
import { CreateBuzz } from "./routes/CreateBuzzRoute";
import { GetBuzz } from "./routes/GetBuzzRoute";
import { CreateComment } from "./routes/CreateCommentRoute";
import { GetComments } from "./routes/GetCommentsRoute";
import { CreateUser } from "./routes/CreateUserRoute";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(GetBuzzes);
app.register(GetComments);
app.register(GetBuzz);
app.register(CreateBuzz);
app.register(CreateComment);
app.register(CreateUser);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running");
  });
