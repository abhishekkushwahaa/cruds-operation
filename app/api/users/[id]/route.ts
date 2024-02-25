import { connect } from "@/app/utils/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { name, email, phone, hobbies } = await request.json();
  await connect();
  await User.findByIdAndUpdate(id, { name, email, phone, hobbies });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connect();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
