import { getAllEmployeefromRepo } from "../_repository/GetAllEmployee.ts";

Deno.serve(async (req) => {
 try {
  
  if(req.method==="GET"){

    const data=await getAllEmployeefromRepo();

    if(!data){
      return new Response(
        JSON.stringify("No data Found in employee table"),
        { status: 200,headers: { "Content-Type": "application/json" } },
      )

    }
    return new Response(
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" } },
    )
  }

  return new Response(
    JSON.stringify("Method Not Allowd"),
    { status: 405,headers: { "Content-Type": "application/json" } },
  )
 } catch (error) {
  return new Response(
    JSON.stringify(`Internal server error ${error}`),
    { status: 500,headers: { "Content-Type": "application/json" } },
  )
  
  
 }
})


