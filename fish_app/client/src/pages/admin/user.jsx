import { Route, Routes, Navigate } from "react-router-dom";
import { SupplyMenu } from "../../components/supplyMenus";
import { BlockUser } from "./blockuser";
import { ManageUsers } from "./manageruser";
import { UserReport } from "./userReport";
import { UserSettings } from "./userSetting";
import { UserMenu } from "../../components/userMenu";

export function UserPage() {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-50 h-full">
        <UserMenu />
      </div>
      <div className="w-full h-full">
        <Routes path="/*">
          <Route path="/blockuser" element={<BlockUser />} />
          <Route path="/manageUser" element={<ManageUsers />} />
          <Route path="/userReport" element={<UserReport />} />
          <Route path="/usersettings" element={<UserSettings />} />
        </Routes>
      </div>
    </div>
  );
}
