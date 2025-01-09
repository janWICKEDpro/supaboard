import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ctlgxlqwffslbizocyxd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bGd4bHF3ZmZzbGJpem9jeXhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMzcxMDAsImV4cCI6MjA1MTkxMzEwMH0.S-DEH8XkHqtVimLHz9EfbpnFKa0UMhvWShG_20VPImc";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
export default supabase;
