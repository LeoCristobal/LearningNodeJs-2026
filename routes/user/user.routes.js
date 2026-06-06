import { Router } from "express";
const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "GET all users" });
});
userRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ title: `GET details for user: ${id}` });
});
userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE user" });
});
userRouter.put("/:id", (req, res) => {
  res.send({ title: `PUT details for user: ${id}` });
});
userRouter.delete("/", (req, res) => {
  res.send({ title: "DELETE user" });
});

export default userRouter;
