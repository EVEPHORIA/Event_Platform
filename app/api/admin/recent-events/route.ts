import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import Event from "@/lib/database/models/event.model";

export async function GET() {
  await connectToDatabase();
  const events = await Event.find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .populate("organizer", "username");
  return NextResponse.json({ events });
}