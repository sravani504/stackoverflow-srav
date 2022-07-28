import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js';
import dotenv from "dotenv"
const app = express();
dotenv.config();
app.use(express.json({limit: "30mb",extended: true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));
app.use(cors());

app.get('/',(req,res) => {
  res.send("<h1>Vamshi Gujjuboina</h1>");
})

app.use('/user',userRoutes);
app.use('/questions',questionRoutes);
app.use('/answer',answerRoutes);

const PORT = process.env.PORT || 5000;
// const DATABASE_URL = process.env.CONNECTION_URL
const CONNECTION_URL ="mongodb+srv://sravani:sravani@stack-overflow-clone.lbvm0rq.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT,() => console.log(`Server running on ${PORT}`)))
  .catch((err) => console.log(err.message))