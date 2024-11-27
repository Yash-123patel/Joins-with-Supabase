
import { createClient } from 'npm:@supabase/supabase-js'
 
const SUPABASE_URL ="https://bfnkrqsxnpgodxswnrzt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmbmtycXN4bnBnb2R4c3ducnp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzAxNDksImV4cCI6MjA0Nzc0NjE0OX0.aRO-IWjqgWiNgnxFAXvqcR85RT-KjYHnlEYUVbhS6tg";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getStudentsWithCourses() {
    const { data: courses, error } = await supabase
        .from('course')
        .select(`
            *,
            teacher (*)
        `);

    if (error) {
        console.log(error);
    }

    console.log(courses);
}

getStudentsWithCourses();

