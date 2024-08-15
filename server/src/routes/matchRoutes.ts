import { Router } from "express";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = Router();

// get fixture details
router.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      "https://v3.football.api-sports.io/fixtures",
      {
        headers: { "x-apisports-key": process.env.FOOTBALL_API_KEY },
        params: { id: id },
      }
    );
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch game details" });
  }
});

export default router;
