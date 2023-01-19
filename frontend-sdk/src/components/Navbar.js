import React from "react";
import { BsFillChatTextFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

const Navbar = ({ profileImage }) => {
  const LOGO =
    "https://res.cloudinary.com/msprojects5/image/upload/v1674152420/isgjx8vrd96sesvn65m3.png";

  return (
    <nav className="h-full w-fit border-r-2 border-r-gray-200 flex flex-col justify-between px-0 py-8 pb-16">
      <div className="flex justify-center items-center">
        <div
          className="rounded-full h-12 w-12 aspect-square shadow-lg shadow-purple-500"
          style={{
            background: `url(${profileImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="flex flex-col space-y-4 items-center justify-center">
        <button className="p-4 hover:bg-purple-300 rounded-xl group transition-all">
          <BsFillChatTextFill
            className="text-gray-300 group-hover:text-purple-600 transition-all"
            size={28}
          />
        </button>
        <button className="p-4 hover:bg-purple-300 rounded-xl group transition-all">
          <MdPayments
            className="text-gray-300 group-hover:text-purple-600 transition-all"
            size={28}
          />
        </button>
        <button className="p-4 hover:bg-purple-300 rounded-xl group transition-all">
          <AiOutlineSetting
            className="text-gray-300 group-hover:text-purple-600 transition-all"
            size={28}
          />
        </button>
      </div>
      <img
        src={LOGO}
        alt="3845696"
        border="0"
        width="96"
        className="relative origin-center -rotate-90 scale-150 "
      />
    </nav>
  );
};

export default Navbar;
