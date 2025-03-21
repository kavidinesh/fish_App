import { Link } from "react-router-dom";

export function SupplyMenu() {
  return (
    <div className="w-50 h-full bg-secondary flex flex-col p-4 shadow-lg">
      {/* Sidebar Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">User Management</h2>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-3">
        <Link
          to="/admin/supply/allSupply"
          className="p-2 bg-primary rounded-lg text-gray-900 font-semibold hover:bg-amber-500"
        >
          All Supply
        </Link>
        <Link
          to="/admin/supply/manageSupply"
          className="p-2 bg-primary rounded-lg text-gray-900 font-semibold hover:bg-amber-500"
        >
          Manage Supply
        </Link>
        <Link
          to="/admin/supply/report"
          className="p-2 bg-primary rounded-lg text-gray-900 font-semibold hover:bg-amber-500"
        >
          Supply Reports
        </Link>
        <Link
          to="/admin/supply/supplyForm"
          className="p-2 bg-primary rounded-lg text-gray-900 font-semibold hover:bg-amber-500"
        >
          Add Supply
        </Link>
      </nav>
    </div>
  );
}
