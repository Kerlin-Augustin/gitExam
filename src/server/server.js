import express from "express";
import path from "path";
import cors from "cors";
import { supabase } from "../lib/supabase.js"; 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.post(`/api/login`, async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Check if user exists in database
    const { data: userExists } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (!userExists) {
      throw new Error('User not found. Double check your email or password!')
    }

    res.status(200).json({ message: "Login successful", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
});

app.use(express.static(path.join(process.cwd(), 'dist')));

// Always have this route last because it is a catch all for rerouting
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// find api url that will go in my prod env