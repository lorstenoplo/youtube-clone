import Head from "next/head";
import { Header, Sidebar, Section } from "../components";

export default function Home() {
  return (
    <div className="bg-[#181920] min-h-screen flex">
      <Head>
        <title>Youtube</title>
        <link
          rel="shortcut icon"
          href="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
          type="image/png"
        />
      </Head>

      <Sidebar />
      <div className="flex-1 pb-10">
        <Header />
        <Section title="Trending" />
        <Section title="Latest" />
      </div>
    </div>
  );
}
