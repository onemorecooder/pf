import React from "react";
import data from "../../data/StackData.json";

const Stack = () => {
  return (
    <div className="h-screen w-screen snap-center inset-0 flex items-center justify-items-center mix-blend-difference bg-black text-white">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        {data.map((item, index) => (
          <div key={index} className="h-fit sm:text-left text-center">
            <h2 className="title_one sm:text-7xl text-4xl pb-4">
              {item.title}
            </h2>
            <ul className="sm:text-xl text-md list-disc">
              {Object.keys(item).map((key) => {
                if (key !== "title") {
                  return <li key={key}>{item[key]}</li>;
                }
                return null;
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
