"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ActivityTable() {
  const { data, isLoading } = useSWR("/api/admin/recent-events", fetcher);

  if (isLoading) return <div>Loading activity...</div>;
  if (!data) return <div>Failed to load activity.</div>;

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-2">Title</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Created By</th>
          </tr>
        </thead>
        <tbody>
          {data.events.map((event: any) => (
            <tr key={event._id}>
              <td className="py-2">{event.title}</td>
              <td className="py-2">{new Date(event.startDateTime).toLocaleString()}</td>
              <td className="py-2">{event.organizer?.username || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}