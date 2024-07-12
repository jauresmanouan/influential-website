import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="h-screen bg-white flex flex-col space-y-4 justify-center items-center text-center">
      <h1 className="px-40 font-montserrat text-black font-extrabold text-4xl leading-tight0">
        Souscrivez à notre newsletter <br /> pour ne rien rater 😉
      </h1>
      <p className="text-blue ">
        Lorem ipsum dolor sit ametconsectetur adipiscing elit phasellus amet{" "}
        <br /> dui quam vitae quis leo.
      </p>
      <form
        action="submit"
        className="flex space-x-4 justify-center items-center pt-8"
      >
        <input
          type="email"
          placeholder="Entrez votre email"
          className="bg-slate-100 rounded-full w-80 h-16 font-inter font-normal px-8 outline-2 outline-blue"
        />
        <button className="btn bg-blue hover:bg-fushia rounded-full w-36 h-16 text-white font-inter font-semibold">
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
          <FaTiktok className="textbase" />
        </button>
        <button className="btn btn-sm text-blue ">
          <FaYoutube className="text-base" />
        </button>
      </div>
      <hr className="border-1 border-blue w-3/4 pt-2" />
      <p className="text-blue font-inter font-normal">
        Copyright © 2024 Developpé avec le ❤️ par Jaurès MANOUAN
      </p>
    </div>
  );
}
