import { Header, Sidebar, Section } from "../components";

export default function Home() {
  return (
    <div className="bg-[#181920] min-h-screen flex">
      <Sidebar />
      <div className="flex-1 pb-10">
        <Header />
        <Section title="Trending" />
        <Section title="Latest" />
      </div>
    </div>
  );
}
