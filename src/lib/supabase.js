import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv'

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// when using env variables on the frontend you can do import.meta.env.(env variable name)
// when using env varibales on the backend you must use process.env.(env variable name)