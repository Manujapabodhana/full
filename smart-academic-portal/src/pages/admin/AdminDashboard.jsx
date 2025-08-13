import Card from "../../components/ui/Card";

export default function AdminDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card title="Total Students">1,200</Card>
      <Card title="Teachers">86</Card>
      <Card title="Attendance Today">94%</Card>
      <Card title="At-Risk (AI)">12</Card>

      <div className="md:col-span-2 xl:col-span-4">
        <Card title="Quick Actions">
          <div className="flex flex-wrap gap-2 mt-2">
            <button className="px-3 py-2 rounded bg-indigo-600 text-white">Add User</button>
            <button className="px-3 py-2 rounded bg-gray-200">Create Class</button>
            <button className="px-3 py-2 rounded bg-gray-200">Generate Report</button>
          </div>
        </Card>
      </div>
    </div>
  );
}
