import React from "react";
import data from "../../data/TimeLineData.json";

const TimeLine = () => {
  return (
    <div className="p-4 flex sm:items-center sm:justify-items-center h-screen mt-14 sm:mt-0">
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
          {data.map((item, index) => (
            <div key={index} className="flex md:contents">
              <div className="bg-white text-black col-start-1 col-end-12 p-4 rounded-xl my-4 ml-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1">{item.empresa}</h3>
                <p className="leading-tight text-justify w-full">
                  {item.fecha}
                </p>
                <p className="leading-tight text-justify w-full">
                  {item.lugar}
                </p>
              </div>
              <div className="col-start-12 col-end-13 ml-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
                  <i className="fas fa-check-circle text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
