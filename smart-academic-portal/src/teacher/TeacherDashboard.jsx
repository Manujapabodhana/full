// import Card from "../../components/ui/Card";

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
      {title && <div className="mb-2 font-semibold">{title}</div>}
      {children}
    </div>
  );
}

export default function TeacherDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Today’s Classes">5</Card>
      <Card title="Pending Grades">18</Card>
      <Card title="Attendance Marked">3/5</Card>
    </div>
  );
}
