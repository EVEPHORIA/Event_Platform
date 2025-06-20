import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import Event from "@/lib/database/models/event.model";
import Order from "@/lib/database/models/order.model";

export async function GET() {
  await connectToDatabase();
  const users = await User.countDocuments();
  const events = await Event.countDocuments();
  const orders = await Order.countDocuments();

  return NextResponse.json({ users, events, orders });
}