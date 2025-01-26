import mongoose from 'mongoose';

const ConnectDb = async () => {
    // Check if there's an existing connection
    if (mongoose.connections[0].readyState) {
        return mongoose.connections[0]; // Return the existing connection if it's ready
    }

    // Establish a new connection if no existing one
    await mongoose.connect(process.env.MONGODB_URI); // Replace with your MongoDB URI
    return mongoose.connection; // Return the connection object
};

export default ConnectDb;
