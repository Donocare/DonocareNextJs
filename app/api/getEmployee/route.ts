import connectMongoDb from "@/lib/mongoDB/mongoDB";
import hrModel from "@/models/hr";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDb();
    const {email} = await req.json()
    const user = await hrModel.find({ email:email});
    
    if(user.length >=1 ){
        return NextResponse.json(user[0]);
    }
    else{
        return NextResponse.json({"message":"userFindError"})
    }
    

  } catch (e) {
    console.log(e);
  }
}
