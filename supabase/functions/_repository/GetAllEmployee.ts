import supabase from "../_shared/DbConnection.ts";

export  async function getAllEmployeefromRepo() {
    const { data, error } = await supabase
        .from('employee')
        .select(`
            *,
            department (*),salary(*)
        `);

    if (error) {
       return error
    }

    return data;
}



