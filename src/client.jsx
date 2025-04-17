import { createClient } from '@supabase/supabase-js';

const URL = 'https://euphbgpwzjfkphqwtdwn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cGhiZ3B3empma3BocXd0ZHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NjYyNzAsImV4cCI6MjA2MDQ0MjI3MH0.IYrh6elPuo_axZymHXNwvZts9NrMpiTRgWv1RITJzo8';

export const supabase = createClient(URL, API_KEY);