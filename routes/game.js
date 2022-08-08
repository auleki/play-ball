import express from 'express';
import {
  basket,
  findLiveGame,
  foul,
  gameOver,
  initializeGame,
  liveGames
} from "../controllers/game.js";

const router = express.Router();

router.get("/", liveGames);
router.post("/initialize", initializeGame);
router.get("/:id", findLiveGame);
router.get("/:id/basket", basket);
router.get("/:id/foul", foul);
router.get("/:id/game-over", gameOver);

export default router;