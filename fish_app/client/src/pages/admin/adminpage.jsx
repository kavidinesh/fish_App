import { Route, Routes } from "react-router-dom";
import { AdminHeader } from "../../components/adminHeader";
import { UserPage } from "./user";
import { SupplyPage } from "./supply";

export function AdminPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[100px] fixed">
        <AdminHeader />
      </div>
      <div className="w-full h-full flex flex-row mt-[100px]">
        <Routes path="/*">
          <Route path="/user/*" element={<UserPage />} />
          <Route path="/supply/*" element={<SupplyPage />} />
        </Routes>
      </div>
    </div>
  );
}
