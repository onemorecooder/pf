import React from "react";

const Page2 = () => {
  return (
    <div className="h-screen w-screen snap-center inset-0 flex mix-blend-difference bg-black">
      <div className="flex flex-col md:flex-row w-screen h-screen align-middle">
        <div className="text-white p-4 md:w-1/2 h-1/2 md:h-screen sm:text-right text-center flex flex-col justify-center">
          <h1 className="title_one sm:text-9xl text-5xl sm:text-right text-center w-full pb-12">
            About Me
          </h1>
          <div className="w-full sm:justify-end justify-center flex">
            <hr className="w-48 h-1 bg-white border-0 rounded " />
          </div>
          <p className="pt-12 sm:pt-10 pl-0 sm:pl-96">
            My name is Alejandro, I'm a passionate
            <b>Front-End</b> Developer specialising in creating engaging and
            functional web experiences. I transform designs into interactive
            code. Welcome to my portfolio!
          </p>
        </div>
        <div className="bg-green-500 text-white p-4 md:w-1/2 h-1/2 md:h-screen">
          Div 2
        </div>
      </div>
    </div>
  );
};

export default Page2;
