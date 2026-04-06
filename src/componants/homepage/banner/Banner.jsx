import React from "react";
// ৩টি '../' দিলে আপনি src ফোল্ডারে পৌঁছাবেন।
import BannerMain from "../../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className="min-h-[60vh]  bg-linear-to-r from-[#131313] to-[#131313]/50 container mx-auto">
      <img src={BannerMain} alt="" className=" mx-auto p-8" />
      <h2 className="text-[40px] font-bold text-[#FFFFFF] text-center">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="font-500 text-[24px] text-[#FFFFFF]/70 text-center mt-6 ">
        Beyond Boundaries Beyond Limits
      </p>
      <button
        className="bg-[#D9F99D] text-black font-bold py-3 px-8 rounded-2xl 
               border-2 border-[#D9F99D] 
               outline outline-2 outline-offset-4 outline-[#D9F99D] 
               hover:bg-linear-to-r from-pink-400/60 to-yellow-200/70 hover:border-[#FFFFFF] transition-all duration-300 block mx-auto mt-8"
      >
        Claim Free Credit
      </button>
    </div>
  );
};

export default Banner;
