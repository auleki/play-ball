import mongoose from 'mongoose';

const DB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

export const connectDb = async (appInstance) => {
  try {
    mongoose.connect(DB_URL, err => {
      if (!err) {
        console.log('Database Connected');
        appInstance.listen(PORT, () => console.log(`Server up at port http://localhost:${PORT}`));
      } else {
        console.log('Could not connect to DB', err);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

