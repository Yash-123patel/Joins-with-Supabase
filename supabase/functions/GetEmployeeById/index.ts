import getEmployeeById from "../_repository/GetEmployeeByIdFromRepo.ts";

Deno.serve(async (req) => {
  try {
    if(req.method=="GET"){

      const url=new URL(req.url);
      const path=url.pathname.split('/');
      const id=path[path.length-1];
      if(!id||isNaN(parseInt(id))){  
      return new Response(
        JSON.stringify({status:400,message: "Invalid Employee Id",time:new Date()}),
        { status: 400,headers: { "Content-Type": "application/json" } },
      )
      }
      const data=await getEmployeeById(parseInt(id));
      if(data.length==0){
        return new Response(
          JSON.stringify({status:404,message: "No data Found",time:new Date()}),
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
