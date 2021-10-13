import { NextPage } from "next";
import { Header, Sidebar } from "../../components";

const WatchVideo: NextPage = () => {
  return (
    <div className="bg-[#181920] min-h-screen flex">
      <Sidebar />
      <div className="flex-1 pb-10">
        <Header />
      </div>
    </div>
  );
};

export default WatchVideo;
