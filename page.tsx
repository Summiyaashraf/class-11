import Image from "next/image";
import Navbar from "./components/Navbar";
import FetchPostsPage from "./fetch-posts/page";
import Hersection from "./components/Herosection";
export default function Home() {
   return (
      <>
         <div className="m-6 ">
            <Navbar />
            <Hersection />
            <FetchPostsPage />
         </div>
      </>
   );
}