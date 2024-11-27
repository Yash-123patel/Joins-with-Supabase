import supabase from "../../_shared/DbConnection.ts";

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

