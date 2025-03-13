import mongoose from 'mongoose';

let isConnected = false;

const dbConnect = async () => {
  if (isConnected) {
    console.log('MongoDB already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    throw error; // Hatanın üst seviyelere iletilmesi
  }
};

export default dbConnect;