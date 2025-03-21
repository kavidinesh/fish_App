import { useState } from "react";

export function UserSettings() {
  const [fullName, setFullName] = useState("Chathuki");
  const [email, setEmail] = useState("chathu@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleSaveChanges = () => {
    alert("Settings updated successfully!");
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-secondary p-6">
      <div className="w-full max-w-lg bg-primary shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">User Settings</h2>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU="
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover"
          />
        </div>

        {/* Full Name */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold">
            New Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter new password"
          />
        </div>

        {/* Notifications Toggle */}
        <div className="mt-4 flex items-center justify-between">
          <label className="text-gray-700 font-semibold">
            Enable Notifications
          </label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="w-5 h-5"
          />
        </div>

        {/* Save Button */}
        <button
          className="w-full bg-secondary text-black font-semibold px-4 py-2 mt-6 rounded-md hover:bg-clicked transition-all"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
