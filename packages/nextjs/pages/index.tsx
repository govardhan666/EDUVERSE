import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-7">
        <div className="px-5">
          <h1 className="text-center mb-5">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Eduverse</span>
          </h1>
          <div className="flex flex-row">
          <img alt="Game" className="ml-16" width={800} height={400} src="/assets/game.png" />
          </div>
          

          <p className="text-center text-lg">
          You own a virtual study table where you can mint empty books, write with a pen in them as a digital signature from wallet
         <br></br> and submit the filled books to gain points.
          </p>

          <div className="flex justify-center">
            <Link href="/board" passHref className="py-2 px-16 mb-1 mt-3 ml-30 bg-green-500 rounded baseline hover:bg-green-300 disabled:opacity-50">
              Play
            </Link>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Home;