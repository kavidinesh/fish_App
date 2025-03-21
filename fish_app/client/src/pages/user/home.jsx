import { Route, Routes } from "react-router-dom";
import { Header } from "../../components/header";
import { User } from "./userProfile";
import FishMarketHome from "./homepage";

export function Home() {
  return (
    <div className="w-full h-screen">
      <header>
        <Header />
      </header>
      <div className="w-full h-full ">
        <Routes path="/*">
          <Route path="/user" element={<User />} />
          <Route path="/" element={<FishMarketHome />}></Route>
        </Routes>
      </div>
    </div>
  );
}
