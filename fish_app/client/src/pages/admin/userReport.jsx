import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export function UserReport() {
  const [search, setSearch] = useState("");
  const [users] = useState([
    { id: 1, fullName: "John Doe", username: "johndoe", role: "Admin", email: "john@example.com" },
    { id: 2, fullName: "Alice Smith", username: "alices", role: "Editor", email: "alice@example.com" },
    { id: 3, fullName: "Bob Johnson", username: "bobj", role: "User", email: "bob@example.com" },
    { id: 4, fullName: "Sara Lee", username: "saralee", role: "Admin", email: "sara@example.com" },
    { id: 5, fullName: "David Kim", username: "davidk", role: "User", email: "david@example.com" },
    { id: 6, fullName: "Michael Brown", username: "michaelb", role: "Editor", email: "michael@example.com" },
   
  ]);

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(search.toLowerCase()) ||
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Generate PDF for a single user
  const generateUserPDF = (user) => {
    const doc = new jsPDF();
    doc.text("User Report", 20, 10);
    doc.autoTable({
      startY: 20,
      head: [["Field", "Details"]],
      body: [
        ["Full Name", user.fullName],
        ["Username", user.username],
        ["Role", user.role],
        ["Email", user.email],
      ],
    });
    doc.save(`${user.username}_Report.pdf`);
  };

  // Generate PDF for all users
  const generateAllUsersPDF = () => {
    const doc = new jsPDF();
    doc.text("All Users Report", 20, 10);
    doc.autoTable({
      startY: 20,
      head: [["Full Name", "Username", "Role", "Email"]],
      body: users.map((user) => [user.fullName, user.username, user.role, user.email]),
    });
    doc.save("All_Users_Report.pdf");
  };

  return (
    <div className="w-full h-full p-6 bg-[var(--color-secondary)] flex justify-center">
      <div className="w-full max-w-5xl bg-primary p-4 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">User Report</h2>

        {/* Generate PDF for All Users at the Top */}
        <div className="flex justify-end mb-4">
          <button
            className="px-4 py-2 bg-secondary text-black rounded-md hover:bg-clicked transition-all"
            onClick={generateAllUsersPDF}
          >
            Generate All Users PDF
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Users..."
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Users Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-[var(--color-primary)]">
            <tr>
              <th className="p-3 border">Full Name</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">PDF</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="p-3 border">{user.fullName}</td>
                <td className="p-3 border">{user.username}</td>
                <td className="p-3 border">{user.role}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">
                  <button
                    className="px-4 py-2 text-black bg-secondary rounded-md hover:bg-clicked transition-all"
                    onClick={() => generateUserPDF(user)}
                  >
                    PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
