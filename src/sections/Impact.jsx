import React from "react";
import { donation3 } from "../assets/images";


const Impact = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-top text-white p-10 h-[700px] flex flex-col justify-center items-center text-center rounded-md"
      style={{ backgroundImage: `url(${donation3})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-[30px] md:text-[40px] font-bold drop-shadow-[7px_7px_7px_rgba(0,0,0,0.9)] mt-[100px]">
          Making an Impact
        </h2>

        <p className="mt-2 drop-shadow-[7px_7px_7px_rgba(0,0,0,0.9)] text-[18px] md:text-[22px] max-w-[900px]">
          We are committed to transforming the lives of orphans by providing
          love, education, and opportunities, ensuring they have the foundation
          to build a brighter future. Through continuous outreach, support, and
          the eventual establishment of an orphanage, we aim to give every
          orphan the hope and care they deserve.
        </p>
      </div>
    </div>
  );
};

export default Impact;
