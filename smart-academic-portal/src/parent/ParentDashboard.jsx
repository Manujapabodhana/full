// import Card from "../../components/ui/Card";

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
      {title && <div className="mb-2 font-semibold">{title}</div>}
      {children}
    </div>
  );
}

export default function ParentDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Child Attendance">92%</Card>
      <Card title="Recent Grades">Math A-, Eng B+</Card>
      <Card title="Messages">1 new</Card>
    </div>
  );
}
