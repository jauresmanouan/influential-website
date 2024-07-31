import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

export default function ButtonPrevNext() {
  return (
    <div className="hidden xl:flex md:space-x-4 absolute right-32 top-20">
      <button className="prev rounded-full bg-white btn-lg">
        <HiOutlineChevronLeft className="text-black" />
      </button>
      <button className="next hover:bg-red-400 rounded-full bg-fushia border-none btn-lg">
        <HiOutlineChevronRight className="text-white" />
      </button>
    </div>
  );
}
