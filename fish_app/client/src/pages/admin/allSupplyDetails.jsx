import { useState } from "react";

export function AllSupplyDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [supplyData] = useState([
    {
      supplierName: "Ocean Fish",
      supplierId: "SUP001",
      productType: "Freezers",
      productPrice: 5000,
      mfd: "2025-02-10",
      efd: "2026-02-10",
      date: "2025-03-18",
      email: "ocean@example.com",
      contact: "1234567890",
      quantity: 2,
    },
    {
      supplierName: "Blue Waters",
      supplierId: "SUP002",
      productType: "Fishing Nets",
      productPrice: 1200,
      mfd: "2025-01-05",
      efd: "2026-01-05",
      date: "2025-03-16",
      email: "blue@example.com",
      contact: "0987654321",
      quantity: 5,
    },
    {
      supplierName: "Sea Breeze",
      supplierId: "SUP003",
      productType: "Ice Boxes",
      productPrice: 2500,
      mfd: "2025-02-20",
      efd: "2026-02-20",
      date: "2025-03-15",
      email: "seabreeze@example.com",
      contact: "1122334455",
      quantity: 3,
    },
  ]);

  const filteredData = supplyData.filter((supply) =>
    Object.values(supply).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="max-w-5xl mx-auto bg-[var(--color-primary)] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center text-[var(--color-secondary)]">
        All Supply Details
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[var(--color-secondary)] text-white">
              <th className="border p-2">Supplier Name</th>
              <th className="border p-2">Supplier ID</th>
              <th className="border p-2">Product Type</th>
              <th className="border p-2">Product Price</th>
              <th className="border p-2">MFD</th>
              <th className="border p-2">EFD</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Contact</th>
              <th className="border p-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((supply, index) => (
                <tr key={index} className="bg-white hover:bg-gray-100">
                  <td className="border p-2">{supply.supplierName}</td>
                  <td className="border p-2">{supply.supplierId}</td>
                  <td className="border p-2">{supply.productType}</td>
                  <td className="border p-2">Rs.{supply.productPrice}</td>
                  <td className="border p-2">{supply.mfd}</td>
                  <td className="border p-2">{supply.efd}</td>
                  <td className="border p-2">{supply.date}</td>
                  <td className="border p-2">{supply.email}</td>
                  <td className="border p-2">{supply.contact}</td>
                  <td className="border p-2">{supply.quantity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="border p-2 text-center">
                  No matching data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
