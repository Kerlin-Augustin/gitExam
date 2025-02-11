import express from "express";
import path from "path";
import cors from "cors";
import { supabase } from "./src/lib/supabase.js"; 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.post(`/api/login`, async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    
    res.status(200).json({ message: "Login successful", data });
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
