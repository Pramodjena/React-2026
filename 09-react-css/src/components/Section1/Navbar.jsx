import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-18">
      <h4 className="bg-black text-white uppercase px-6 py-2 rounded-full hover:text-blue-500 hover:cursor-pointer">
        Target Clients
      </h4>
      <button className="bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm hover:bg-blue-500 hover:cursor-pointer hover:text-white">
        Corporate World System
      </button>
    </div>
  );
};

export default Navbar;
