import { Router } from "express";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = Router();

// get team details
router.route("/:teamId").get(async (req, res) => {
  try {
    const { teamId } = req.params;
    const response = await axios.get(
      "https://v3.football.api-sports.io/teams",
      {
        headers: { "x-apisports-key": process.env.FOOTBALL_API_KEY },
        params: { id: teamId },
      }
    );
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch team details" });
  }
});

// get team statistics
router.route("/:leagueId/:season/:teamId").get(async (req, res) => {
  try {
    const { leagueId, season, teamId } = req.params;
    const response = await axios.get(
      "https://v3.football.api-sports.io/teams",
      {
        headers: { "x-apisports-key": process.env.FOOTBALL_API_KEY },
        params: { league: leagueId, season: season, team: teamId },
      }
    );
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch team statistics" });
  }
});

// get team roster
router.route("/:teamId").get(async (req, res) => {
  try {
    const { teamId } = req.params;
    const response = await axios.get(
      "https://v3.football.api-sports.io/players/squad",
      {
        headers: { "x-apisports-key": process.env.FOOTBALL_API_KEY },
        params: { team: teamId },
      }
    );
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch team roster" });
  }
});

export default router;
