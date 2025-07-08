import connectMongoDb from "@/lib/mongoDB/mongoDB";
import hrModel from "@/models/hr";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { key, value, email } = await req.json();

    await connectMongoDb();
    const user = await hrModel.find({ email: email });
    if (user.length >= 1) {
      try {
        const updateUser = await hrModel.updateOne(
          { email: email },
          [{ $set: { [key]: value }}]
        );
        
        return NextResponse.json({ message: "success" });
      } catch (e) {
        // console.log(e)
        return NextResponse.json({ message: "updateError" });
      }
    } else {
      return NextResponse.json({ message: "userFoundErrror" });
    }
    return NextResponse.json({ message: "success" });
  } catch (e) {
    return NextResponse.json({ message: "unknownError" });
  }
}
