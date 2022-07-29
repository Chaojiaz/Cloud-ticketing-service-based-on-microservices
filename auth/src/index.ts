import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  console.log('Starting up....');

  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined!');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined!');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connecting to MongoDB');
  } catch (err) {
    console.error(err);
  }

  // if pass the try/catch successfully, it is time to listen to traffic.
  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!');
  });
};

start();

