import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wkvjdjxrqmzizfrekssp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdmpkanhycW16aXpmcmVrc3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4MzYxODYsImV4cCI6MjAxNzQxMjE4Nn0.i397ZLc79gh_pgxrAnsSOJQVRySdp09eS9QAOGVB4iw';

export const supabase = createClient(supabaseUrl, supabaseKey);
