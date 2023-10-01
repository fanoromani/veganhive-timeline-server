import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { GetBuzzes } from "./routes/GetBuzzesRoute";
import { CreateBuzz } from "./routes/CreateBuzzRoute";
import { GetBuzz } from "./routes/GetBuzzRoute";
import { CreateComment } from "./routes/CreateCommentRoute";
import { GetComments } from "./routes/GetCommentsRoute";
import { RegisterUser } from "./routes/RegisterUserRoute";
import { LoginUser } from "./routes/LoginUserRoute";
import { GetUser } from "./routes/GetUserRoute";
import { LikeBuzzRoute } from "./routes/LikeBuzzRoute";
import { LikeCommentRoute } from "./routes/LikeCommentRoute";
import jwt from "@fastify/jwt";

const app = fastify();

app.register(fastifyCors, {
  origin: process.env.CORS_ORIGIN,
});

const jwtKey = process.env.JWT_KEY || "secret";
app.register(jwt, { secret: jwtKey });

app.register(GetBuzzes);
app.register(GetComments);
app.register(GetBuzz);
app.register(GetUser);
app.register(CreateBuzz);
app.register(CreateComment);
app.register(RegisterUser);
app.register(LoginUser);
app.register(LikeBuzzRoute);
app.register(LikeCommentRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running");
  });
