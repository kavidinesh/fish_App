import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export function UpdateSupply() {
  const location = useLocation();
  const navigate = useNavigate();

  // Ensure safe access to location.state
  const initialState = location.state || {};
  console.log(initialState)

  const [supplierName, setSupplierName] = useState(initialState.supplierName || "");
  const [supplierId, setSupplierId] = useState(initialState.supplierId || "");
  const [productType, setProductType] = useState(initialState.productType || "freezers");
  const [price, setPrice] = useState(initialState.productPrice || "");
  const [quantity, setQuantity] = useState(initialState.quantity || "");
  const [email, setEmail] = useState(initialState.email || "");
  const [contact, setContact] = useState(initialState.contact || "");
  const [totalPrice, setTotalPrice] = useState(initialState.totalPrice || 0);
  const [supplyDate, setSupplyDate] = useState(initialState.date || "");
  const [mfdDate, setMfdDate] = useState(initialState.mfd || "");
  const [expiryDate, setExpiryDate] = useState(initialState.efd || "");

  const today = new Date().toISOString().split("T")[0];

  // Auto-calculate total price when price or quantity changes
  useEffect(() => {
    const total = (Number(price) || 0) * (Number(quantity) || 0);
    setTotalPrice(total);
  }, [price, quantity]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Expiry Date > Manufactured Date
    if (mfdDate && expiryDate && new Date(mfdDate) >= new Date(expiryDate)) {
      toast.error("Expiry date must be after the manufactured date!");
      return;
    }

    console.log({
      supplierName,
      supplierId,
      productType,
      price,
      quantity,
      email,
      contact,
      totalPrice,
      supplyDate,
      mfdDate,
      expiryDate,
    });

    toast.success("Supply details updated successfully!");
    navigate("/admin/supply/manageSupply");
  };

  return (
    <div className="max-w-lg mx-auto bg-[var(--color-primary)] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center text-[var(--color-secondary)]">
        Update Supply Details
      </h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Supplier Name"
          className="w-full p-2 mb-2 border rounded"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
          required
        />

        <input
          type="text"
          placeholder="Supplier ID"
          className="w-full p-2 mb-2 border rounded"
          value={supplierId}
          onChange={(e) => setSupplierId(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))}
          required
        />

        <select
          className="w-full p-2 mb-2 border rounded"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        >
          <option value="freezers">Freezers</option>
          <option value="fish containers">Fish Containers</option>
          <option value="ice boxes">Ice Boxes</option>
          <option value="fishing nets">Fishing Nets</option>
          <option value="fishing rods">Fishing Rods</option>
        </select>

        <input
          type="number"
          placeholder="Price per Item"
          className="w-full p-2 mb-2 border rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          min="1"
        />

        <input
          type="number"
          placeholder="Quantity"
          className="w-full p-2 mb-2 border rounded"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          min="1"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 mb-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Contact Number"
          className="w-full p-2 mb-2 border rounded"
          value={contact}
          onChange={(e) => setContact(e.target.value.replace(/\D/g, "").slice(0, 10))}
          required
        />

        <label className="block text-sm font-medium text-gray-700">Supply Date</label>
        <input
          type="date"
          className="w-full p-2 mb-2 border rounded"
          value={supplyDate}
          onChange={(e) => setSupplyDate(e.target.value)}
          min={today}
          required
        />

        <label className="block text-sm font-medium text-gray-700">Manufactured Date</label>
        <input
          type="date"
          className="w-full p-2 mb-2 border rounded"
          value={mfdDate}
          onChange={(e) => setMfdDate(e.target.value)}
          required
        />

        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
        <input
          type="date"
          className="w-full p-2 mb-2 border rounded"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          min={mfdDate || today}
          required
        />

        <input
          type="text"
          placeholder="Total Price"
          className="w-full p-2 mb-2 border rounded bg-gray-200"
          value={totalPrice}
          readOnly
        />

        <button
          type="submit"
          className="w-full bg-[var(--color-secondary)] text-white p-2 rounded-lg hover:bg-[var(--color-clicked)]"
        >
          Update
        </button>
      </form>

      {totalPrice > 0 && (
        <div className="mt-4 text-center text-lg font-semibold text-[var(--color-clicked)]">
          Total Price: LKR {totalPrice}
        </div>
      )}
    </div>
  );
}
