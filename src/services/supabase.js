import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = "sb_publishable_izBGzbIAE1gMODS4-ZiqvQ_66exKBAF";

export const supabase = createClient(
  "https://btxtrifrmcklypeljttx.supabase.co",
  SUPABASE_KEY,
);

console.log(supabase);
