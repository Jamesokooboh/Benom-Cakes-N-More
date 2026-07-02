// Supabase connection configuration
// The anon key is safe to expose in frontend code — it only allows
// actions permitted by your Row Level Security policies (added in Phase 5).
const SUPABASE_URL = "https://incurxgcpcclwrblbvms.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "sb_publishable_rYnPAlBczboCfGVptPjLLA_hcGAa0sd";

// Initialise the Supabase client (library loaded in HTML — see Step below)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);