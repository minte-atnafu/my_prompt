import mongoose from "mongoose";

const isConnected = false; //to track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log("database is connected succefully")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "my_prompt",
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}   