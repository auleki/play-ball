import User from '../models/player.js';

export const login = async (req, res, next) => {
  /**
   * 
   * 
   */

  try {
    res.status(200).send('Logged in 🤴🏽');
  } catch (error) {
    res.send('Error logging in');
  }
};

export const logout = async (req, res, next) => {
  /**
   * 
   * 
   */
  try {
    res.status(200).send('Logged out 🤴🏽');
  } catch (error) {
    res.send('Error logging out');
  }
};

export const register = async (req, res, next) => {
  /**
   * 
   * 
   */
  try {
    res.send('Registered Successfully 🤴🏽');
  } catch (error) {
    res.send('Error logging registering');
  }
};

export const resetPassword = async (req, res, next) => {
  /**
   * 
   * 
   */
  try {
    res.send('Password Successfully Changed 🤴🏽');
  } catch (error) {
    res.send('Error changing password');
  }
};

