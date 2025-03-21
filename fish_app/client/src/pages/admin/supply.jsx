import { Route, Routes } from "react-router-dom";
import { AdminHeader } from "../../components/adminHeader";
import { SupplyForm } from "./supplyForm";
import { AllSupplyDetails } from "./allSupplyDetails";
import { SupplyMenu } from "../../components/supplyMenus";
import { ManageSupply } from "./supplyManage";
import { SupplyReport } from "./supplyReport";
import { UpdateSupply } from "./updatesupply";

export function SupplyPage() {
  return (
    <div className="w-full h-full flex flex-row ">
      <div className="w-50 h-full">
        <SupplyMenu />
      </div>
      <div className="w-full h-full bg-secondary">
        <Routes path="/*">
          <Route path="/supplyForm" element={<SupplyForm />} />
          <Route path="/allSupply" element={<AllSupplyDetails />} />
          <Route path="/manageSupply" element={<ManageSupply />} />
          <Route path="/report" element={<SupplyReport />} />
          <Route path="/manageSupply/update" element={<UpdateSupply />} />
        </Routes>
      </div>
    </div>
  );
}
