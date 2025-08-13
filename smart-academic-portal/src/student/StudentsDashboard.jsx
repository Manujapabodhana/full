// import Card from "../../components/ui/Card";

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
      {title && <div className="mb-2 font-semibold">{title}</div>}
      {children}
    </div>
  );
}

export default function StudentDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Assignments Due">2 this week</Card>
      <Card title="Avg. Grade">B+</Card>
      <Card title="AI Risk">Low</Card>
    </div>
  );
}
