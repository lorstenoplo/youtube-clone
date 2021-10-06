import React from "react";
import { FireSolid } from "@graywolfai/react-heroicons";
import { VideoTile } from "./VideoTile";

export const Trending: React.FC = () => {
  return (
    <div className="mt-5 mx-4">
      <div className="flex items-center mb-6">
        <FireSolid className="h-6 w-6 text-red-600 mr-3" />
        <h3 className="text-white">Trending</h3>
      </div>

      <div className="flex space-x-6">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <VideoTile key={i} />
        ))}
      </div>
    </div>
  );
};
