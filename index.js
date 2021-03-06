import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"; 

const app = express();

const PORT = 4000;

const handleProfile = (req,res) => res.send('you are my profile');
const handleHome = (req,res) =>  res.send('hello from ass');
const handleListening = () =>  
    console.log(`Listening on: http://localhost:${PORT}`);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("dev"));


app.get('/',handleHome);
app.get('/profile',handleProfile);
app.listen(4000,handleListening);