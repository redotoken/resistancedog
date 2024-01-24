import Head from "next/head";
import MatrixBackground from "./components/MatrixBackground";

import Layout from "../../../components/Layout";
import HtbSection from "./components/sections/HtbSection";
import MainScreen from "./components/sections/MainScreen";
import Narrative from "./components/sections/Narrative";
import Divider from "../../../components/Divider";
import Tokenomics from "./components/sections/Tokenomics";
import Community from "./components/sections/Community";
import Footer from "./components/sections/Footer";
import Designed from "../../../components/Designed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resistance Dog | Home</title>
      </Head>
      <Layout>
        <MatrixBackground />
        <div className="homeContainer">
          <MainScreen />
          <HtbSection />
          <Divider />
          <Narrative />
          <Divider />
          <Tokenomics />
          <Divider />
          <Community />
          <Footer />
          <Designed colorBg={'white'}/>
        </div>
      </Layout>

      <style jsx>{`
        .homeContainer {
          width: 100%;
          height: min-content;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          z-index: 2;
        }

        
      `}</style>
    </>
  );
}
