import { useState } from "react";


export function ManageUsers() {

  
  // Initial user data
  const [users, setUsers] = useState([
    { id: 1, fullName: "John Doe", username: "johndoe", role: "Admin", email: "john@example.com" },
    { id: 2, fullName: "Alice Smith", username: "alices", role: "Editor", email: "alice@example.com" },
    { id: 3, fullName: "Bob Johnson", username: "bobj", role: "User", email: "bob@example.com" },
    { id: 4, fullName: "Sara Lee", username: "saralee", role: "Admin", email: "sara@example.com" },
    { id: 5, fullName: "David Kim", username: "davidk", role: "User", email: "david@example.com" },
    { id: 6, fullName: "Michael Brown", username: "michaelb", role: "Editor", email: "michael@example.com" },
    { id: 7, fullName: "Emma Watson", username: "emmaw", role: "User", email: "emma@example.com" },
    
  ]);

  // Delete User Function
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

 
  return (
    <div className="w-full h-full p-6 bg-[var(--color-secondary)] flex justify-center">
      <div className="w-full max-w-5xl bg-primary p-4 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Manage Users</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-[var(--color-primary)]">
            <tr>
              <th className="p-3 border">Full Name</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="p-3 border">{user.fullName}</td>
                <td className="p-3 border">{user.username}</td>
                <td className="p-3 border">{user.role}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">
                  
                   
                  <button
                    className="px-4 py-2 text-black bg-secondary rounded-md hover:bg-red-600 transition-all"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
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
