import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export function SupplyReport() {
  const [searchTerm, setSearchTerm] = useState("");
  const supplyData = [
    {
      supplierName: "Ocean Fish",
      supplierId: "SUP001",
      productType: "Freezers",
      productPrice: 5000,
      quantity: 2,
      date: "2025-03-18",
      mfd: "2025-01-10",
      efd: "2026-01-10",
      email: "ocean@example.com",
      contact: "1234567890",
    },
    {
      supplierName: "Blue Waters",
      supplierId: "SUP002",
      productType: "Fishing Nets",
      productPrice: 1200,
      quantity: 5,
      date: "2025-03-16",
      mfd: "2025-02-05",
      efd: "2026-02-05",
      email: "blue@example.com",
      contact: "0987654321",
    },
    {
      supplierName: "Sea Breeze",
      supplierId: "SUP003",
      productType: "Ice Boxes",
      productPrice: 2500,
      quantity: 3,
      date: "2025-03-15",
      mfd: "2024-12-20",
      efd: "2025-12-20",
      email: "seabreeze@example.com",
      contact: "1122334455",
    },
  ];

  const filteredData = supplyData.filter((supply) =>
    Object.values(supply).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Supply Report", 14, 15);
    doc.text("Company Name: ABC Supplies", 14, 25);
    doc.text("Date: " + new Date().toLocaleDateString(), 14, 35);

    doc.autoTable({
      startY: 45,
      head: [
        [
          "Supplier Name", "Supplier ID", "Product Type", "Price", "Quantity", "Total Price", "Supply Date", "MFD", "EFD", "Email", "Contact"
        ],
      ],
      body: filteredData.map(({ supplierName, supplierId, productType, productPrice, quantity, date, mfd, efd, email, contact }) => [
        supplierName, supplierId, productType, `Rs.${productPrice}`, quantity, `Rs.${productPrice * quantity}`, date, mfd, efd, email, contact
      ]),
    });
    doc.save("SupplyReport.pdf");
  };

  return (
    <div className="max-w-5xl mx-auto bg-[var(--color-primary)] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center text-[var(--color-secondary)]">
        Supply Report
      </h2>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[var(--color-secondary)] text-white">
              <th className="border p-2">Supplier Name</th>
              <th className="border p-2">Supplier ID</th>
              <th className="border p-2">Product Type</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Total Price</th>
              <th className="border p-2">Supply Date</th>
              <th className="border p-2">MFD</th>
              <th className="border p-2">EFD</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Contact</th>
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
                  <td className="border p-2">{supply.quantity}</td>
                  <td className="border p-2">Rs.{supply.productPrice * supply.quantity}</td>
                  <td className="border p-2">{supply.date}</td>
                  <td className="border p-2">{supply.mfd}</td>
                  <td className="border p-2">{supply.efd}</td>
                  <td className="border p-2">{supply.email}</td>
                  <td className="border p-2">{supply.contact}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="border p-2 text-center">
                  No matching data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button
        onClick={generatePDF}
        className="w-full bg-[var(--color-secondary)] text-white p-2 mt-4 rounded-lg hover:bg-[var(--color-clicked)]"
      >
        Download PDF Report
      </button>
    </div>
  );
}
