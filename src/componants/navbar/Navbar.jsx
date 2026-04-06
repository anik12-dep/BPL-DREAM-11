import React from "react";
// '../' দিলে আপনি যাবেন componants এ, '../../' দিলে আপনি যাবেন src ফোল্ডারে।
// সেখান থেকে assets এ ঢুকবেন।
import dollarOne from "../../assets/doller-one.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className=" flex justify-between items-center gap-2 font-bold text-xl">
          0 Coins
          <img src={dollarOne} alt="" className="w-6 h-6 object-contain" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
