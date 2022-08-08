import express from 'express';
import {
  createReferee,
  showAllReferees,
  deleteReferee,
  editReferee
} from "../controllers/referee.js";

const router = express.Router();

router.get("/", showAllReferees);
router.post("/", createReferee);
router.patch("/:id", editReferee);
router.delete("/:id", deleteReferee);

export default router;