import dotenv from "dotenv";
import express from "express";
import { runAgent } from "./agent.js";
const port = 3000;
const app = express();
dotenv.config();
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");
app.get('/', (req, res) => {
  res.render("index.ejs");
});

app.post('/chat', async (req, res) => {
    try{
  const { message } = req.body;
  const reply = await runAgent(message)
  res.json({ reply });
    }catch (err) {
    res.json({ reply: "AI is currently unavailable 😔 Try again." });
  }
})

app.listen(port , ()=>{
  console.log(`Server is running on port ${3000}`);
})