import { createClient } from '@supabase/supabase-js';

const URL = 'https://euphbgpwzjfkphqwtdwn.supabase.co';
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const supabase = createClient(URL, API_KEY);