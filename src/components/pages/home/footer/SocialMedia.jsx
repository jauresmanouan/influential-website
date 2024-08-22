import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";

export default function SocialMedia() {
  return (
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
  );
}
