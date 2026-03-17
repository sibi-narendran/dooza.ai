import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Server-side Supabase client using service role key
// Only use in API routes and server components — never import client-side
const mockClient = {
    from: () => ({
        insert: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        select: async () => ({ data: [], error: null, count: 0 }),
        update: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        delete: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        upsert: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
    }),
};

export const supabaseServer = supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : mockClient;
