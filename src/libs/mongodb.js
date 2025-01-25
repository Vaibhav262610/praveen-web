import mongoose from 'mongoose'

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MONGODB CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.log("ERROR IN MONGODB CONNECTING", error);
    }
}

export default ConnectDb;