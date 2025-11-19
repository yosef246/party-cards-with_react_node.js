import serverless from "serverless-http";
import express from "express";
import app from "./final_project/app.js";

const server = express();

// middleware ל-CORS + preflight
server.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://party-cards-with-react-node-js.vercel.app"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

server.use("/", app);

export default serverless(server);
