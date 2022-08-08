import Team from "../models/team.js";

export const createTeam = async (req, res) => {
  try {
    const newTeam = new Team(req.body)
    const savedTeam = await newTeam.save()
    res.status(201).send(savedTeam)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const getAllTeams = async (req, res) => {
  try {
    const fetchedTeams = await Team.find({})
    res.status(201).send(fetchedTeams)
  } catch (error) {
    res.status(400).send(error)
  }
};

// export const createTeam = async (req, res) => {
//   try {

//   } catch (error) {

//   }
// };

// export const createTeam = async (req, res) => {
//   try {

//   } catch (error) {

//   }
// };

// export const createTeam = async (req, res) => {
//   try {

//   } catch (error) {

//   }
// };

// export const createTeam = async (req, res) => {
//   try {
    
//   } catch (error) {
    
//   }
// }

