import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { socialMediaIcons } from "./sociaMediaIcons";

export default function Footer() {
  return (
    <div className="min-h-screen bg-white flex flex-col space-y-4 justify-center items-center text-center p-4">
      <h1 className="px-4 sm:px-10 md:px-20 lg:px-40 font-montserrat text-black font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight">
        Souscrivez à notre newsletter <br /> pour ne rien rater
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Winking%20Face.webp"
          alt="Winking Face"
          className="h-8 lg:h-12 w-8 lg:w-12 inline-flex"
        />
      </h1>
      <p className="text-blue text-sm sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus amet{" "}
        <br className="hidden sm:inline" /> dui quam vitae quis leo.
      </p>
      <form
        action="submit"
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center pt-8 w-full px-4"
      >
        <input
          type="email"
          placeholder="Entrez votre email"
          className="bg-slate-100 rounded-full w-full sm:w-80 h-12 sm:h-16 font-inter font-normal px-4 sm:px-8 outline-2 outline-blue"
        />
        <button className="btn bg-blue hover:bg-fushia rounded-full w-full sm:w-36 h-12 sm:h-16 text-white font-inter font-semibold">
          Souscrire
        </button>
      </form>
      <div className="flex space-x-3 pb-20 pt-10">
        <button className="btn btn-sm text-blue">
          <FaFacebookF className="text-base" />
        </button>
        <button className="btn btn-sm  text-blue">
          <AiFillInstagram className="text-base" />
        </button>
        <button className="btn btn-sm text-blue ">
          <FaLinkedinIn className="text-base" />
        </button>
        <button className="btn btn-sm text-blue">
          <FaTiktok className="text-base" />
        </button>
        <button className="btn btn-sm text-blue ">
          <FaYoutube className="text-base" />
        </button>
      </div>
      <hr className="border-1 border-blue w-3/4 pt-2" />
      <p className="text-blue font-inter font-normal text-sm sm:text-base md:text-lg">
        Copyright © 2024 Développé avec le{" "}
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Red%20Heart.webp"
          alt="Red Heart"
          className="h-3 lg:h-5 w-3 lg:w-5 align-middle inline"
        />{" "}
        par Jaurès MANOUAN
      </p>
    </div>
  );
}
