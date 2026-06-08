import { Router } from "express";
import { getAllUsers, getUserById } from "../../controller/user.controller.js";
const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE user" });
});
userRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ title: `PUT details for user: ${id}` });
});
userRouter.delete("/", (req, res) => {
  res.send({ title: "DELETE user" });
});

export default userRouter;
