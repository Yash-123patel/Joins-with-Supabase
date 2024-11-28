import getEmployeeById from "../_repository/GetEmployeeByIdFromRepo.ts";

Deno.serve(async (req) => {
  try {
    if(req.method=="GET"){

      const url=new URL(req.url);
      const path=url.pathname.split('/');
      const id=path[path.length-1];
      if(!id||isNaN(parseInt(id))){  
      return new Response(
        JSON.stringify("Invalid Employee id"),
        { status: 400,headers: { "Content-Type": "application/json" } },
      )
      }
      const data=await getEmployeeById(parseInt(id));
      if(data==null){
        return new Response(
          JSON.stringify("No data Found"),
          { status: 404,headers: { "Content-Type": "application/json" } },
        )

      }
      return new Response(
        JSON.stringify(data),
        { status: 200,headers: { "Content-Type": "application/json" } },
      )
    }
      return new Response(
        JSON.stringify("Method Not Allowd"),
        { status: 405,headers: { "Content-Type": "application/json" } },
      )
     
    }
      catch (error) {
      return new Response(
        JSON.stringify(`Internal server error ${error}`),
        { status: 500,headers: { "Content-Type": "application/json" } },
      )
     }
})
