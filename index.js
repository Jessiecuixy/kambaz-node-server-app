import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import session from "express-session";
import "dotenv/config";

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
})); 
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      sameSite: "lax",
      httpOnly: true
    },

} 
app.use(session(sessionOptions)
);  
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
Lab5(app);
Hello(app)
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {
//     res.send('Welcome to Full Stack Development!')})
// app.listen(4000, () => {
//     console.log("Server is running at http://localhost:4000");
//   });
app.listen(process.env.PORT || 4000)
