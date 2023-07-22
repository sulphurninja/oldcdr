import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected Biatch!');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Mongodb bitch!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
};

export default connectDB;
