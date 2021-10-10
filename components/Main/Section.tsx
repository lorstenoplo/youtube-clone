import React from "react";
import { FireSolid } from "@graywolfai/react-heroicons";
import { VideoTile } from "./VideoTile";

export const Section: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="mt-5 mx-4">
      <div className="flex items-center mb-6">
        <FireSolid className="h-6 w-6 text-red-600 mr-3" />
        <h3 className="text-white">{title}</h3>
      </div>

      <div className="flex space-x-5">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <VideoTile key={i} />
        ))}
      </div>
    </div>
  );
};
