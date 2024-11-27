import supabase from "../../_shared/DbConnection.ts";

export default async function getCourseWithTeacherAnyPayment() {
    const { data, error } = await supabase
        .from('course')
        .select(`
            *,
            teacher (*,payment(*))
        `);

    if (error) {
       return error
    }

    return data;
}



