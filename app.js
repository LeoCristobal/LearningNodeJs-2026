import { API_VERSION1, PORT } from "./config/env.js";
import express from "express";
import authRouter from "./routes/auth/auth.routes.js";
import userRouter from "./routes/user/user.routes.js";
import subscriptionRouter from "./routes/subscription/subscription.routes.js";
import connectToDb from "./database/mongodb.js";
import errorMiddleWare from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

// MIDDLEWARE
app.use([
  errorMiddleWare,
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(),
]);

// API ENDPOINTS
app.use(`${API_VERSION1}/auth`, authRouter);
app.use(`${API_VERSION1}/users`, userRouter);
app.use(`${API_VERSION1}/subscriptions`, subscriptionRouter);

app.listen(PORT, async () => {
  console.log(`listening on http://localhost:${PORT}`);
  await connectToDb();
});
