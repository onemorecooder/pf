import React from "react";

const Contact = () => {
  return (
    <div className="h-screen w-screen snap-center inset-0 flex items-center justify-items-center mix-blend-difference bg-black text-white">
      <div className="text-center w-screen justify-center justify-items-center">
        <h1 className={`text-lg font-serif `}>Contact me</h1>
        <ul className="leading-relaxed sm:text-9xl text-5xl p-4">
          <li className={`font-serif`}>
            <a href="as" className="linkOne">
              Email
            </a>
          </li>
          <li className={`font-serif `}>
            <a href="as" className="linkTwo">
              LinkedIn
            </a>
          </li>
          <li className={`font-serif `}>
            <a href="as" className="linkThree">
              Instagram
            </a>
          </li>
          <li className={`font-serif `}>
            <a href="as" className="linkFour">
              Twitter
            </a>
          </li>
        </ul>
        <h1 className={`text-lg font-serif `}>Or go down</h1>
      </div>
    </div>
  );
};

export default Contact;
