import getCourseWithTeacherAnyPayment from "./_repository/JoinMoreThanTwoTables.ts"

Deno.serve(async (req) => {
 try {
  
  if(req.method==="GET"){

    const data=await getCourseWithTeacherAnyPayment();

    if(!data){
      return new Response(
        JSON.stringify("No data Found"),
        { status: 400,headers: { "Content-Type": "application/json" } },
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
    JSON.stringify("Internal server error"),
    { status: 500,headers: { "Content-Type": "application/json" } },
  )
  
  
 }
})


