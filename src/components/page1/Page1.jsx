import React from "react";
import Title from "../title/Title";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Page1 = () => {
  return (
    <>
      <div className="h-screen snap-center inset-0 flex flex-col items-center justify-center mix-blend-difference bg-black">
        <Title />
        <MdKeyboardDoubleArrowDown className="mt-10 sm:text-6xl text-4xl arrow animate-bounce text-white" />
      </div>
    </>
  );
};

export default Page1;
