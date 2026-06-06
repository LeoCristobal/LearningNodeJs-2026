import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send({ title: `GET details for subscription: ${id}` });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "CREATE subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: `PUT details for subscription: ${id}` });
});

subscriptionRouter.delete("/", (req, res) => {
  res.send({ title: "DELETE subscription" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "GET all user subscriptions" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscriptions" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;
