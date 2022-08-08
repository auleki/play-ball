import OfficialGame from "../models/officialGame.js";
import CasualGame from "../models/casualGame.js";
import MultiSet from "../models/multiSetGame.js";
import { CASUAL, MULTI_SET } from "../helpers/constants.js";

export const basket = async (req, res, next) => {
  /**
   * The point is sent as a parameter alongside the team that scored, point amount, and match ID
   * the match is found and the team which matches the team name gets their score++
   */

  try {

  } catch (error) {

  }
};

export const foul = async (req, res, next) => {
  /**
   * If a foul is given, the type of foul and the team that fouled is sent in the parameters
   * The match is found and then the team that matches the team name has foul++
   */
  try {

  } catch (error) {

  }
};

export const initializeGame = async (req, res, next) => {
  /**
   * work Multi-Mode for now
   * take 
   */
  try {
    const mode = req.body.mode;
    if (mode === 'multi-set') {
      const newGame = new MultiSet(req.body);
      const savedGame = await newGame.save();
      res.status(201).send({ msg: "New Multi-set created", data: savedGame });
    } else if (mode === 'casual') {
      const newGame = new OfficialGame(req.body);
      const savedGame = await newGame.save();
      res.status(201).send({ msg: "Non mutli-set", data: savedGame });
    } else {
      res.status(201).send({ msg: "Unknown game type" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

export const liveGames = async (req, res) => {
  try {
    let fetchedGames;
    const gameType = req.query.game_type;
    if (gameType) {
      if (gameType === CASUAL) {
        fetchedGames = await CasualGame.find({});
      } else if (gameType === MULTI_SET) {
        // fetchedGames = await MultiSet.find({}).populate('referee');
        fetchedGames = await MultiSet.find({});
      } else {
        fetchedGames = await Game.find({});
      }
    } else {
      throw 'Game type needed';
    }
    res.status(200).send(fetchedGames);
  } catch (error) {
    res.status(404).send({ data: error, msg: "Could not fetch live games" });
  }
};

/**
 * This is for when the search bar or a form request is sent
 */
export const searchForGame = async (req, res, next) => {
  try {
    const { gameId } = req.body;
    const foundGame = await Game.findById(gameId);
    res.status(200).send(foundGame);
  } catch (error) {
    res.status(404).send("Could not fetch live games");
  }
};

/**
 * Implementing MutliSet
 */
export const findLiveGame = async (req, res) => {
  try {
    const { id } = req.params;
    const foundGame = await MultiSet.findById(id);
    res.status(200).send({ data: foundGame, msg: 'Single game found' });
  } catch (error) {
    res.status(400).send({ msg: "Could not fetch live game", data: error });
  }
};

/**
 * i) swap sides when the match is over
 * 1. Know who won
 * 2. Remove the loser and add to otherTeams
 * 3. Add the 0 zero index of otherTeams to be the second team, ensure to replace the exact position too
 * 4. 
 */
export const gameOver = async (req, res) => {
  // article https://www.mongodb.com/community/forums/t/updating-a-nested-object-in-a-document-using-mongoose/141865
  try {
    const gameType = req.query.game_type;
    const id = req.params.id;
    if (gameType === MULTI_SET) {
      const currentGame = await MultiSet.findById(id);
      console.log('Team B', currentGame.teamB);
      res.status(200).send({ data: currentGame, msg: "Found a multi-set game" });
    } else {
      res.status(200).send({ msg: "Non multi set game finished" });
    }
  } catch (error) {
    res.status(400).send({ msg: 'Could not load new team' });
  }
};