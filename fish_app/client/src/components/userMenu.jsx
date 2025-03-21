import { Link, useLocation } from "react-router-dom";

export function UserMenu() {
  const location = useLocation();

  // Function to check if the current path matches the link path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-50 h-full bg-secondary flex flex-col p-4 shadow-lg">
      {/* Sidebar Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">User Management</h2>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-3">
        <Link
          to="/admin/user/blockuser"
          className={`p-2 rounded-lg font-semibold ${
            isActive("/admin/user/blockuser")
              ? "bg-amber-500 text-white"
              : "bg-primary text-gray-900 hover:bg-amber-500"
          }`}
        >
          Block User
        </Link>
        <Link
          to="/admin/user/manageUser"
          className={`p-2 rounded-lg font-semibold ${
            isActive("/admin/user/manageUser")
              ? "bg-amber-500 text-white"
              : "bg-primary text-gray-900 hover:bg-amber-500"
          }`}
        >
          Manage Users
        </Link>
        <Link
          to="/admin/user/userReport"
          className={`p-2 rounded-lg font-semibold ${
            isActive("/admin/user/userReport")
              ? "bg-amber-500 text-white"
              : "bg-primary text-gray-900 hover:bg-amber-500"
          }`}
        >
          User Reports
        </Link>
        <Link
          to="/admin/user/usersettings"
          className={`p-2 rounded-lg font-semibold ${
            isActive("/admin/user/usersettings")
              ? "bg-amber-500 text-white"
              : "bg-primary text-gray-900 hover:bg-amber-500"
          }`}
        >
          User Settings
        </Link>
      </nav>
    </div>
  );
}
