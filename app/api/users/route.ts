import { connect } from "@/app/utils/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, phone, hobbies } = await request.json();
  await connect();
  await User.create({ name, email, phone, hobbies });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
  await connect();
  const users = await User.find();
  return NextResponse.json({ users });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connect();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "User deleted" }, { status: 200 });
}
