import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ADMIN_USER_IDS } from "@/constants/admin";
import DashboardStats from "@/components/admin/DashboardStats";
import ActivityTable from "@/components/admin/ActivityTable";

export default async function AdminPage() {
  const user = await currentUser();

  if (!user || !ADMIN_USER_IDS.includes(user.id)) {
    redirect("/"); // Not authorized
  }

  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <DashboardStats />
      <div className="mt-10">
        <ActivityTable />
      </div>
    </main>
  );
}