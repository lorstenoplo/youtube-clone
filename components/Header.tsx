import React from "react";

export const Header: React.FC = () => {
  return (
    <div
      className="px-4 py-6 bg-[#181920] flex justify-between border-gray-800"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        <img
          src="https://thumbs.dreamstime.com/b/cartoon-laughing-funny-zombie-face-vector-monster-square-avatar-101864273.jpg"
          alt="avatar"
          className="h-8 object-contain rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};
