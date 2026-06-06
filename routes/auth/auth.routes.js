import { Router } from "express";

const authRouter = Router();

authRouter.get("/sign-in", (req, res) => {
  res.send({ title: "Sign In" });
});

authRouter.get("/sign-up", (req, res) => {
  res.send({ title: "Sign up" });
});

authRouter.get("/sign-out", (req, res) => {
  res.send({ title: "Sign out" });
});

export default authRouter;
