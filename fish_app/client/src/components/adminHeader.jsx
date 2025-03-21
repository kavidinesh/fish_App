import { Link, useLocation } from "react-router-dom";

export function AdminHeader() {
  const location = useLocation();

  // Function to check if the current path matches the link path
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full h-[100px] bg-primary flex items-center justify-between px-6 shadow-md">
      {/* Logo & Title */}
      <div className="flex items-center space-x-3">
        <img
          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU="
          alt="Admin Logo"
          className="h-12 w-12 object-cover rounded-full"
        />
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>

      {/* Navigation Buttons */}
      <nav className="flex space-x-4">
        <Link
          to="/admin/home"
          className={`px-3 py-2 font-semibold rounded-lg ${
            isActive("/admin/home")
              ? "bg-clicked text-white"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          Home
        </Link>
        <Link
          to="/admin/user/blockuser"
          className={`px-3 py-2 font-semibold rounded-lg ${
            isActive("/admin/user/blockuser") ||
            isActive("/admin/user/manageUser") ||
            isActive("/admin/user/userReport") ||
            isActive("/admin/user/usersettings")
              ? "bg-clicked text-white"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          Users
        </Link>
        <Link
          to="/admin/supply/allSupply"
          className={`px-3 py-2 font-semibold rounded-lg ${
            isActive("/admin/supply/allSupply") ||
            isActive("/admin/supply/manageSupply") ||
            isActive("/admin/supply/report") ||
            isActive("/admin/supply/supplyForm")
              ? "bg-clicked text-white"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          Supply
        </Link>
        <Link
          to="/login"
          className="bg-secondary text-black px-4 py-2 rounded-lg hover:bg-blue-400"
        >
          Logout
        </Link>
      </nav>
    </header>
  );
}
