import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(morgan("dev"));


app.get("/api/health", (_, res) => {
  res.json({ status: "ok" });
});

export default app;
