import { DB_NAME } from '../constants.js';
import mongoose from 'mongoose';

const connect_database = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
  } catch (error) {
    console.log('Mongodb connection failed !!', error);
    process.exit(1);
  }
};

export default connect_database;
