import React from "react";
import { FireOutline, CheckSolid } from "@graywolfai/react-heroicons";
import Link from "next/link";

export const VideoTile: React.FC = () => {
  return (
    <Link href={"/watch/[videoId]"} as={"/watch/123"}>
      <a>
        <div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTYzMzUwNTAzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
              alt=""
              className="rounded h-36"
            />

            <img
              src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
              alt=""
              className="absolute left-2 bottom-2 rounded-full h-8 w-8"
            />
          </div>
          <div className="flex flex-1 justify-between text-gray-500 text-[12.5px] mt-1.5">
            <span className="flex items-center">
              <FireOutline className="h-4 w-4 text-red-600 mr-1" /> 2.6M views
            </span>
            <span>3 day ago</span>
          </div>

          <h3 className="text-white mt-1.5 text-[15px]">
            Relaxing Music for Stress Relief Part 2
          </h3>

          <p className="text-gray-500 text-sm mt-2 flex items-center">
            Stanley Kuber <CheckSolid className="ml-1 text-green-500 h-4 w-4" />
          </p>
        </div>
      </a>
    </Link>
  );
};
