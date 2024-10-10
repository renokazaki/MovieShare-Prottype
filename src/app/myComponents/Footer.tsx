import React from "react";
import Link from "next/link";

import { FcPlus } from "react-icons/fc"; //追加ボタン
import { FcHome } from "react-icons/fc"; //Homeボタン

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200 text-center ">
      <div className="flex justify-around items-center py-4">
        <Link href="/" className="w-1/2 h-full">
          <div className="h-full flex justify-center items-center border-r-2 border-black">
            <FcHome size={32} />
          </div>
        </Link>
        <Link href="/addMovies" className="w-1/2 h-full">
          <div className="h-full flex justify-center items-center">
            <FcPlus size={32} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
