import Referee from '../models/referee.js';

export const createReferee = async (req, res) => {
  try {
    const newReferee = new Referee(req.body);
    console.log(newReferee);
    const savedReferee = await newReferee.save();
    res.status(201).send({ data: savedReferee, msg: "Referee created" });
  } catch (error) {
    res.status(401).send({ data: error });
  }
};

export const showAllReferees = async (req, res) => {
  try {
    const allReferees = await Referee.find({});
    res.status(200).send({ data: allReferees });
  } catch (error) {
    res.status(404).send({ data: error, msg: 'Could not get referees' });
  }
};

export const editReferee = async (req, res) => {
  try {
    const id = req.params.id;
    const currentUpdate = req.body;
    // ensure to return the new doc
    const editedReferee = await Referee.findByIdAndUpdate(id, currentUpdate);
    res.status(200).send({ data: editedReferee });
  } catch (error) {
    res.status(400).send({ data: error });
  }
};

export const deleteReferee = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedReferee = await Referee.findByIdAndDelete(id);
    res.status(200).send({ msg: "Referee deleted", data: deletedReferee });
  } catch (error) {
    res.status(400).send({ data: error });
  }
};