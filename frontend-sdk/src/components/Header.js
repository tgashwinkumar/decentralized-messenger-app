import React, { useContext } from "react";
import { WalletContext } from "../App";

const Header = ({ title, className }) => {
  const { walletAddress, setWalletAddress } = useContext(WalletContext);

  const connectWallet = () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => {
        console.log(res);
        setWalletAddress(res[0]);
        localStorage.setItem("walletAddress", res[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <header
      className={`${className} p-4 px-8 flex items-center justify-between`}
    >
      <h1 className="text-4xl font-semibold">{title}</h1>
      <button
        onClick={connectWallet}
        className="px-12 py-4 max-w-[35ch] overflow-hidden text-ellipsis rounded-full bg-gradient-to-r from-purple-700 to-pink-500 text-white font-semibold text- shadow-xl shadow-pink-300"
      >
        {walletAddress ? walletAddress : "Connect Wallet"}
      </button>
    </header>
  );
};

export default Header;
