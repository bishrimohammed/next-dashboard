import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
// import { ReactNode } from "react";
const DashBoardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="dashboard-layout h-screen w-full flex ">
      <div className="hidden md:block w-[17%]">
        <Sidebar />
      </div>
      <div className="dashboard-layout__content flex-1 bg-gray-100">
        <Header />
        <div className="m-2  rounded-md ">{children}</div>
      </div>
    </div>
  );
};
export default DashBoardLayout;
