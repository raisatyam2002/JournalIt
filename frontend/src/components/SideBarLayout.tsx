import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
export default function SideBarLayout() {
  return (
    <div className="flex h-screen overflow-hidden ">
      <SideBar></SideBar>
      <main className="w-4/5 h-full ">
        <Outlet></Outlet>
      </main>
    </div>
  );
}
