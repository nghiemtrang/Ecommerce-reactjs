import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    
  "https://afafhjxkmhyafidrcooo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmYWZoanhrbWh5YWZpZHJjb29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5ODA3MjIsImV4cCI6MTk5NzU1NjcyMn0.I_pEtGWte2RVHPHYdJKWxeXgcG0afG1lS4YXJWWsryk"
);
 export default supabase