// import { HiOutlineChevronLeft } from "react-icons/hi";
// import { HiOutlineChevronRight } from "react-icons/hi2";

// export default function Testimonies() {
//   return (
//     <section className="h-[50rem] bg-blue flex flex-col justify-center items-center">
//       <div className="flex justify-center relative items-start flex-col">
//         <h1 className="font-montserrat text-white font-extrabold text-7xl mb-14">
//           Que disent ils ? 🤔
//         </h1>{" "}
//         <div className="flex space-x-4 absolute right-0 top-12">
//           <button className="btn btn-xs rounded-full bg-white sm:btn-sm md:btn-md lg:btn-lg">
//             <HiOutlineChevronLeft className="text-black" />
//           </button>
//           <button className="btn btn-xs hover:bg-red-400 rounded-full bg-fushia border-none sm:btn-sm md:btn-md lg:btn-lg">
//             <HiOutlineChevronRight className="text-white" />
//           </button>
//         </div>
//         <div className="flex flex-col space-y-4 justify-center items-center">
//             <div className="grid grid-cols-2 grid-rows-1 card lg:card-side rounded-none bg-base-100 shadow-xl h-[420px] w-[1080px]">
//               <figure>
//                 <img
//                   className="h-[420px] w-[588px] object-cover"
//                   src="src/assets/images/Aletier IFL 240623 4.png"
//                   alt="Album"
//                 />
//               </figure>
//               <div className="flex flex-col justify-center p-8">
//                 <h2 className="text-blue text-4xl font-inter font-black mb-5">
//                   “Transformation...”
//                 </h2>
//                 <p className="font-inter font-normal mb-8">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices
//                   scelerisque mi sed interdum lacus tellus in mi orc, netus nisl
//                   laoreet phasellus. Pellentesque non nunc placerat mi quis vitae
//                   cursus ornare.
//                 </p>
//                 <p className="text-turquoise font-inter font-semibold mb-2">
//                   Bénédicte KOFFI
//                 </p>
//                 <p className="font-inter font-medium">Ingénieur Zootechnique</p>
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <div className="w-4 h-4 rounded-full bg-white"></div>
//               <div className="w-4 h-4 rounded-full bg-white"></div>
//               <div className="w-4 h-4 rounded-full bg-white"></div>
//               <div className="w-4 h-4 rounded-full bg-fushia"></div>
//               <div className="w-4 h-4 rounded-full bg-white"></div>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { testimonies } from "./dataTestimonies";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Testimonies() {
  return (
    <div className="text-3xl">
      <Swiper>
        {testimonies.map((testimonies) => (
          <SwiperSlide>
            <section className="h-[50rem] bg-blue flex flex-col justify-center items-center">
              <div className="grid grid-cols-2 grid-rows-1 card lg:card-side rounded-none bg-base-100 shadow-xl h-[420px] w-[1080px]">
                <figure>
                  <img
                    className="h-[420px] w-[588px] object-cover"
                    src={testimonies.image}
                    alt={testimonies.title}
                  />
                </figure>
                <div className="flex flex-col justify-center p-8">
                  <h2 className="text-blue text-5xl font-inter font-black mb-5">
                    {testimonies.title}
                  </h2>
                  <p className="font-inter text-2xl font-normal mb-8">
                    {testimonies.description}
                  </p>
                  <p className="text-turquoise text-2xl font-inter font-semibold mb-2">
                    {testimonies.author}
                  </p>
                  <p className="font-inter text-xl font-medium">
                    {testimonies.function}
                  </p>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
