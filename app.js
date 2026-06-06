import { PORT } from "./config/env.js";
import express from "express";
import authRouter from "./routes/auth/auth.routes.js";
import userRouter from "./routes/user/user.routes.js";
import subscriptionRouter from "./routes/subscription/subscription.routes.js";
import connectToDb from "./database/mongodb.js";

const app = express();
const apiUrl = "/api/v1";

app.use(`${apiUrl}/auth`, authRouter);
app.use(`${apiUrl}/users`, userRouter);
app.use(`${apiUrl}/subscriptions`, subscriptionRouter);
app.listen(PORT, async () => {
  console.log(`listening on http://localhost:${PORT}`);
  await connectToDb();
});
