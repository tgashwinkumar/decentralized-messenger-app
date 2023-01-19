import React from "react";
import Header from "../components/Header";
import { BiCamera, BiPencil, BiShare } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

const Settings = () => {
  return (
    <section className="w-full flex flex-col">
      <Header title="Settings" />
      <div className="w-full flex flex-row items-center justify-center gap-4 mt-48">
        <div className="w-1/2 flex flex-col items-center justify-center gap-4">
          <div className="w-1/2 flex flex-row items-center justify-center gap-2">
            <BiCamera className="text-4xl bg-gray-300 text-white-500 rounded-full p-2 w-12 h-12" />
            <p className="text-gray-500 text-xl">Change Profile Picture</p>
          </div>
          <div
            className="rounded-full h-48 w-48 shadow-lg shadow-purple-500"
            style={{
              background: `url(https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
          </div>
          <button
            className="w-1/3 h-12 bg-purple-500 text-white rounded-lg mt-4"
            type="submit"
          >
            Change
          </button>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center gap-4 space-y-2">
          <div className="w-1/2 flex flex-row items-center justify-center gap-2">
            <BiPencil className="text-4xl bg-gray-300 text-white-500 rounded-full p-2 w-12 h-12" />
            <p className="text-gray-500 text-xl">Change Name</p>
          </div>
          <input
            type="text"
            className="w-1/3 h-12 border-2 border-gray-300 rounded-lg px-4"
            placeholder="Enter your name"
          />
          <button
            className="w-1/3 h-12 bg-purple-500 text-white rounded-lg"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
