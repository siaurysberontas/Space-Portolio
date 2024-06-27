import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]"
      style={{ pointerEvents: "none" }}
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start"></div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Šiaurys Bėrontas 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
