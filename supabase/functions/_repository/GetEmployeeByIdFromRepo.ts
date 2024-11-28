import supabase from "../_shared/DbConnection.ts";

export default async function getEmployeeById(emp_id:number) {
    const{data,error}=await supabase
       .from('employee')
       .select(`*,
               department(*),salary(*)
             `).eq('empid',emp_id);
      
    if (error) {
        return error
     }
     if(!data)
        return null;
 
     return data;
}