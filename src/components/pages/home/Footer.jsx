import Newsletter from "./footer/Newsletter";
import SocialMedia from "./footer/SocialMedia";

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
      <p className="text-blue font-inter font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
        Ne vous inquiétez pas nous ne serons pas intrusif
        <br className="hidden sm:inline" />
      </p>
      <Newsletter />
      <SocialMedia />
      <hr className="border-1 border-blue w-3/4 pt-2" />
      <p className="text-blue font-inter font-normal text-sm sm:text-base md:text-lg">
        Copyright © 2024 Développé avec le{" "}
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Red%20Heart.webp"
          alt="Red Heart"
          className="h-3 lg:h-5 w-3 lg:w-5 align-middle inline"
        />{" "}
        par{" "}
        <a
          href="https://www.linkedin.com/in/jauresmanouan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline">Jaurès MANOUAN</span>
        </a>
      </p>
    </div>
  );
}
