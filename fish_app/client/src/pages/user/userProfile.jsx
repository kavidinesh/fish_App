import { useState } from "react";
import "./userProfile.css";

export function User() {
  const [fullName, setFullName] = useState("Chathuki Omaya");
  const [email, setEmail] = useState("Chathuki@example.com");

  function handleUpdate() {
    alert("Profile updated successfully!");
  }

  function handleDelete() {
    setFullName("");
    setEmail("");
    alert("Profile deleted!");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 bg-pictures">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        {/* Profile Image */}
        <img
          src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU="
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300 object-cover"
        />

        {/* User Info */}
        <h2 className="text-xl font-semibold mt-4">{fullName || "No Name"}</h2>
        <p className="text-gray-600">{email || "No Email"}</p>

        {/* Profile Details */}
        <div className="mt-4 text-left">
          <p className="text-gray-700 font-semibold">Full Name:</p>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <p className="text-gray-700 font-semibold mt-3">Email:</p>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleUpdate}
            className="bg-primary text-black px-4 py-2 rounded-md hover:bg-blue-600 w-1/2 mr-2"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-black px-4 py-2 rounded-md hover:bg-red-600 w-1/2 ml-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
