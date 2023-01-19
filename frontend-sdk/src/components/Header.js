import React from "react";

const Header = () => {
  return (
    <header className="p-4 px-8 flex items-center justify-between">
      <h1 className="text-4xl font-semibold">Chat</h1>
      <button className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-700 to-pink-500 text-white font-semibold text- shadow-xl shadow-pink-300">
        Connect Wallet
      </button>
    </header>
  );
};

export default Header;
