"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function DashboardStats() {
  const { data, isLoading } = useSWR("/api/admin/stats", fetcher);

  if (isLoading) return <div>Loading stats...</div>;
  if (!data) return <div>Failed to load stats.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Total Users</h2>
        <p className="text-3xl font-bold">{data.users}</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Total Events</h2>
        <p className="text-3xl font-bold">{data.events}</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
        <p className="text-3xl font-bold">{data.orders}</p>
      </div>
    </div>
  );
}