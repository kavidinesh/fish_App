import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ManageSupply() {
  const [searchTerm, setSearchTerm] = useState("");
  const [supplyData, setSupplyData] = useState([
    {
      id: 1,
      supplierName: "Ocean Fish",
      supplierId: "SUP001",
      productType: "Freezers",
      productPrice: 5000,
      date: "2025-03-18",
      mfd: "2025-01-10",
      efd: "2026-01-10",
      email: "ocean@example.com",
      contact: "1234567890",
      quantity: 2,
    },
    {
      id: 2,
      supplierName: "Blue Waters",
      supplierId: "SUP002",
      productType: "Fishing Nets",
      productPrice: 1200,
      date: "2025-03-16",
      mfd: "2025-02-05",
      efd: "2027-02-05",
      email: "blue@example.com",
      contact: "0987654321",
      quantity: 5,
    },
    {
      id: 3,
      supplierName: "Sea Breeze",
      supplierId: "SUP003",
      productType: "Ice Boxes",
      productPrice: 2500,
      date: "2025-03-15",
      mfd: "2025-01-20",
      efd: "2026-01-20",
      email: "seabreeze@example.com",
      contact: "1122334455",
      quantity: 3,
    },
  ]);

  const navigate = useNavigate("");
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({});

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredData = supplyData.filter((supply) =>
    Object.values(supply).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDelete = (id) => {
    setSupplyData(supplyData.filter((supply) => supply.id !== id));
  };

  const handleEdit = (supply) => {
    navigate("/admin/supply/manageSupply/update", { state: supply });
  };

  const handleUpdate = () => {
    const updatedSupply = [...supplyData];
    updatedSupply[editIndex] = formData;
    setSupplyData(updatedSupply);
    setEditIndex(null);
  };

  return (
    <div className="max-w-5xl mx-auto bg-[var(--color-primary)] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center text-[var(--color-secondary)]">
        Manage Supply
      </h2>

      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[var(--color-secondary)] text-white">
              <th className="border p-2">Supplier Name</th>
              <th className="border p-2">Supplier ID</th>
              <th className="border p-2">Product Type</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Supply Date</th>
              <th className="border p-2">MFD</th>
              <th className="border p-2">EFD</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Contact</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((supply) => (
                <tr key={supply.id} className="bg-white hover:bg-gray-100">
                  <td className="border p-2">{supply.supplierName}</td>
                  <td className="border p-2">{supply.supplierId}</td>
                  <td className="border p-2">{supply.productType}</td>
                  <td className="border p-2">${supply.productPrice}</td>
                  <td className="border p-2">{supply.date}</td>
                  <td className="border p-2">{supply.mfd}</td>
                  <td className="border p-2">{supply.efd}</td>
                  <td className="border p-2">{supply.email}</td>
                  <td className="border p-2">{supply.contact}</td>
                  <td className="border p-2">{supply.quantity}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleEdit(supply)}
                      className="bg-[var(--color-secondary)] text-white px-3 py-1 mb-2 rounded mr-2 hover:bg-[var(--color-clicked)]"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(supply.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
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

      {editIndex !== null && (
        <div className="mt-6 p-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold text-[var(--color-secondary)] mb-3">
            Edit Supply
          </h3>
          <input
            type="text"
            placeholder="MFD"
            className="w-full p-2 mb-2 border rounded"
            value={formData.mfd}
            onChange={(e) => setFormData({ ...formData, mfd: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="EFD"
            className="w-full p-2 mb-2 border rounded"
            value={formData.efd}
            onChange={(e) => setFormData({ ...formData, efd: e.target.value })}
            required
          />
          <button
            onClick={handleUpdate}
            className="w-full bg-[var(--color-secondary)] text-white p-2 rounded-lg hover:bg-[var(--color-clicked)]"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
