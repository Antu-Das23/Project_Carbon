// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "bbd83"; // Your ZeroBounce Master API Key

// Email validation route
app.post("/validate-email", async (req, res) => {
  const { email } = req.body;

  try {
    const response = await fetch(
      `https://api.zerobounce.net/v2/validate?api_key=${API_KEY}&email=${email}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error while validating email" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
