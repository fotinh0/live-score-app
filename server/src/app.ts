import express from "express";
import cors from "cors";
import fixturesRoute from "./routes/fixturesRoutes";
import matchRoutes from "./routes/matchRoutes";
import teamRoutes from "./routes/teamRoutes";
import leagueRoutes from "./routes/leagueRoutes";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/fixtures", fixturesRoute);
app.use("/api/match", matchRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/league", leagueRoutes);

app.get("/", (req, res) => {
  res.send("Live Score Server is running!");
});

app.listen(port, () => {
  console.log(`Live Score Server is listening at http://localhost:${port}`);
});
