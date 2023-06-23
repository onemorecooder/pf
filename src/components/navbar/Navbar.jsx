import React from "react";
import { FaEmpire, FaRebel } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed flex align-middle justify-center w-screen p-4 gap-2">
      <FaEmpire className="w-10 h-10" />
      <FaRebel className="w-10 h-10" />
    </div>
  );
};

export default Navbar;
