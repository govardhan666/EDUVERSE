import type { NextPage } from "next";

import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Marketplace: NextPage = () => {
  const { writeAsync: buySeed, isLoading } = useScaffoldContractWrite({
    contractName: "YourGarden",
    functionName: "buySeed",
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  return (
    <div className="flex items-center flex-col flex-grow pt-7">
      <div className="px-5">
        <h1 className="text-center mb-5">
          <span className="block text-3xl mb-2">Mint an Empty book</span>
        </h1>

        <img src="/assets/buy_book.jpeg" alt="Seed" />

        <button className="py-2 px-16 mb-1 mt-3 ml-9 bg-green-500 rounded baseline hover:bg-green-300 disabled:opacity-50 " onClick={buySeed}>
          Buy
        </button>
      </div>
    </div>
  )
}

export default Marketplace;