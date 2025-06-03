This is just to track what I have learned while following this tutorial on MERN stack realtime chat app 

A. backend setup
    1. npm init -y to initialize the project
    2. install dependencies :
        "bcryptjs": "^3.0.2",
        "cloudinary": "^2.6.1",
        "cookie-parser": "^1.4.7",
        "dotenv": "^16.5.0",
        "express": "^5.1.0",
        "jsonwebtoken": "^9.0.2",
        "mongoose": "^8.15.1",
        "socket.io": "^4.8.1"
    3. create entry file "index.js"
    4. Creating the authentication folder:
        1. Create some folders:
            controllers
            lib
            models
            routes
            src
        2. create login logout and signup routes, and test them. 
        3. seperate the logic into the "controllers" folder. This simplifies the code readabliity. 

<!-- Up until this point is 14:22 -->


B. Database setup (mongoDB)
    1. login MongoDB
    2. create new project --> create new cluster
    3. create .env file in ROOT folder
    4. back to mongoDB, find connection setup and see ur password there, grab it and put it in the .env file:
        MONGODB_URI=mongodb+srv://ernestkennethyoungsumarno:KQ5mVq2QtNnh8bhL@cluster0.jggx2mv.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0

        PORT=5001
    5. create db.js in lib and then do dis:
        
        import mongoose from "mongoose";

            export const connectDB = async () => {
                try {
                    const conn = await mongoose.connect(process.env.MONGODB_URI);
                    console.log(`MongoDB connected: ${conn.connection.host}`);
                } catch (error) {
                    console.log("MongoDB connection error:", error);
                }
            }
    6. then go to entry file(index.js) and import and call the function connectDB();
    7. 
