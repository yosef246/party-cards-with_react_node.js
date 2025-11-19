import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import newUserRouter from "./routes/auth.js";
import postRouter from "./routes/post.js";
import tagRouter from "./routes/tag.js";
import paymentRouter from "./routes/payment.js";
import connectToMongoDB from "../utils/conectDB.js";

const app = express();
// const port = 3003;
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "https://party-cards-with-react-node-js.vercel.app",
    credentials: true,
  })
);

// Middleware ל-preflight
app.options("*", (req, res) => {
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
  res.sendStatus(204);
});

//env מאפשר לי להשתמש בערכים שנמצאים בקובץ
dotenv.config();

//middleware - לייבוא המידע שנכנס
app.use(express.json());

//מפרש את הקוקיז שמגיע מהלקוח
app.use(cookieParser());

//מתחבר למונגו שלי
connectToMongoDB();

app.use("/api/auth/", newUserRouter);
app.use("/api/post/", postRouter);
app.use("/api/tag/", tagRouter);
app.use("/api/payment/", paymentRouter);

app.get("/test", (req, res) => res.json({ status: "Server works ✅" }));

// app.listen(port, "0.0.0.0", () => {
//   console.log(`Example run on port ${port}!`);
// });

export default app;
