import React from "react";

const Landing = (obj) => {
  return (
    <div>
      <div className="h-screen w-full bg-black fixed z-50 top-0 left-0 ">
        <div className="w-full h-full flex justify-center items-center pb-24">
          <div className="z-50 bg-black text-white">
              <h1 className='land text-8xl'>{obj.count}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
