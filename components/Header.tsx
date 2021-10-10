import React from "react";
import {
  PlusCircleOutline,
  AdjustmentsOutline,
  BellOutline,
} from "@graywolfai/react-heroicons";

export const Header: React.FC = () => {
  return (
    <div
      className="px-4 py-6 bg-[#181920] flex justify-between border-gray-800 sticky top-0 z-50"
      style={{ borderBottomWidth: 1 }}
    >
      <img
        src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
        alt="logo"
        className="h-8 object-contain"
      />

      <div className="flex flex-1 px-6">
        <input
          type="text"
          placeholder="Type to search"
          className="flex-1 bg-transparent search_bar outline-none text-white"
        />
      </div>

      <div className="flex items-center space-x-6">
        <PlusCircleOutline className="h-6 w-6 text-white" />

        <AdjustmentsOutline className="h-6 w-6 text-white" />
        <div className="relative">
          <div className="absolute h-2.5 w-2.5 bg-red-400 top-0 right-0 rounded-full" />
          <BellOutline className="h-6 w-6 text-white" />
        </div>

        <img
          src="https://thumbs.dreamstime.com/b/cartoon-laughing-funny-zombie-face-vector-monster-square-avatar-101864273.jpg"
          alt="avatar"
          className="h-8 object-contain rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};
