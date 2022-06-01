import express from "express";
import cors from "cors";
import PersonajeRouter from "./src/controllers/personajeController.js";
import PeliculaRouter from "./src/controllers/peliculaController.js";
import authController from "./src/controllers/authController.js";
import {jwtStrategy} from './src/common/jwt.strategy.js';
import "dotenv/config";
import passport from 'passport';


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/characters", PersonajeRouter);
app.use("/movies", PeliculaRouter);
app.use('/auth',authController);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

passport.use(jwtStrategy);
app.use(passport.initialize());