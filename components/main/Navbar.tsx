import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#ffb01d]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/flora.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
            style={{
              opacity: 1,
              borderRadius: '50px',
              maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 75%)'}}
          />

          <span className="font-bold ml-[10px] hidden md:block text-orange-100">
            Šiaurys's Portfolio
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#ffb01d] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-orange-100">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
