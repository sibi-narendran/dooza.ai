import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a mock client that does nothing when Supabase is not configured
const mockClient = {
    from: () => ({
        insert: async () => ({ error: { message: 'Supabase not configured' } }),
        select: async () => ({ data: [], error: null }),
    }),
};

// Only create the real client if environment variables are set
export const supabase = supabaseUrl && supabaseAnonKey 
    ? createClient(supabaseUrl, supabaseAnonKey)
    : mockClient;
