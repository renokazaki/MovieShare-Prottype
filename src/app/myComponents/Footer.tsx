import React from "react";
import Link from "next/link";

import { FcPlus } from "react-icons/fc"; //追加ボタン
import { FcHome } from "react-icons/fc"; //Homeボタン

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200 text-center ">
      <div className="flex justify-around items-center py-4">
        <Link href="/">
          <FcHome />
        </Link>
        <Link href="/addMovies">
          <FcPlus />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
