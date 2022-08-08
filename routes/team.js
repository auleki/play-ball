import express from 'express';
import { createTeam, getAllTeams } from '../controllers/team.js';

const router = express.Router();

router.get("/", getAllTeams);
router.post("/create", createTeam);

export default router;