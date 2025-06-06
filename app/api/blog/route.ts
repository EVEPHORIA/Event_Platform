import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import Blog from "@/lib/database/models/blog.model";

export async function GET() {
  await connectToDatabase();
  const posts = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  await connectToDatabase();
  const { title, excerpt, imgSrc } = await req.json();
  const post = await Blog.create({ title, excerpt, imgSrc });
  return NextResponse.json({ success: true, post });
}

export async function DELETE(req: Request) {
  await connectToDatabase();
  const { id } = await req.json();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}