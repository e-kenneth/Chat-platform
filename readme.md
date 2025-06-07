This is just to track what I have learned while following this tutorial on MERN stack realtime chat app 

<!-- Error codes: -->
 res.status(500).json({error:"Internal server error"});
 <!-- BACKEND -->
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

C. Signup, Login, Logout, checkAuth

    a. Signup:
        1. request fullname, password and email from client and check if they are empty or not. 
        2. Hash password and generate a jwt token if all fields are according to requirements
    b. Login:
        1. Request email and password from client
        2. match email with existing records in mongodb
        3. compare password using bcrypt.compare(password, user.password)
        4. Generate another jwt token with user.id and the response
    c. Logout:
        1. Simply clear the cookies 

    d. Checkauth:
        1. check if the user has cookies. 

D. Update profile:
    1. Get user profilepic, if null print req
    2. 
        const uploadResponse = await cloudinary.uploader.upload(profilePic)
        const updatedUser = await User.findByIdAndUpdate(userId, {profilePic:uploadResponse.secure_url}, {new:true}) 

        res.status(200).json(updatedUser)

E. Message routes:
    1. Create message js model
    2. Create the Schema for the message model
    3. Get Message:
        1. Find all messages who have the senderId = logged in user and receiverId = target and vice versa
    4. Send Message:
        as of 1:24:39, still only discussed how to handle sending images in message thru cloudinary, and initializing an object Message. 


<!-- FRONTEND -->
A. Frontend setup
    1, DaisyUI
    2. using axios, and zustand for global state management: 
        import {create} from "zustand"

        export const useAuthStore = create((set) => ({
            authUser:null,

            isCheckingAuth:true,
        }));
B. Creating Signup UI
    1. Nothing really worth mentioning, just basic design stuff
    2. One cool concept is how show password works with the use of state management. 
C. 
    
