import React from "react";
import { MenuOutline } from "@graywolfai/react-heroicons";

export const Sidebar: React.FC = () => {
  return (
    <div
      style={{ borderRightWidth: 1 }}
      className="bg-[#181920] w-20 h-screen py-[28px] flex justify-center border-gray-800 sticky left-0 top-0"
    >
      <MenuOutline className="h-6 w-6 text-white cursor-pointer" />
    </div>
  );
};
