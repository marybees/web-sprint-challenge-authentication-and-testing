const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const jokesRouter = require("../jokes/jokes-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/jokes", authenticate, jokesRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "is up" });
});

module.exports = server;
