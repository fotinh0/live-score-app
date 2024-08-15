import { Router } from "express";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = Router();

// get todays fixtures
router.route("/").get(async (req, res) => {
  try {
    const response = await axios.get(
      "https://v3.football.api-sports.io/fixtures",
      {
        headers: { "x-apisports-key": process.env.FOOTBALL_API_KEY },
        params: { season: 2024, date: new Date().toISOString().split("T")[0] },
      }
    );
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch fixtures" });
  }
});

export default router;
