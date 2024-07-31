import { Swiper, SwiperSlide } from "swiper/react";
import { testimonies } from "./dataTestimonies";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./customSwiper.css";

// import required modules
import {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  EffectCreative,
} from "swiper/modules";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

export default function TestimoniesSlider() {
  return (
    <div className="text-3xl">
      <Swiper
        modules={[Pagination, Navigation, Mousewheel, Keyboard, EffectCreative]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: ["-100%", 0, -1],
          },
          next: {
            shadow: true,
            translate: ["100%", 0, 0],
          },
        }}
      >
        {testimonies.map((testimonies) => (
          <SwiperSlide key={testimonies.id}>
            <section className="flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 rounded-none bg-base-100 shadow-xl h-auto md:h-[26rem] w-screen lg:w-[67rem]">
                <figure>
                  <img
                    className="w-full h-64 md:h-[420px] object-cover"
                    src={testimonies.image}
                    alt={testimonies.title}
                  />
                </figure>
                <div className="flex flex-col justify-center p-4 md:p-8">
                  <h2 className="text-blue text-3xl md:text-5xl font-inter font-black mb-3 md:mb-5">
                    {testimonies.title}
                  </h2>
                  <p className="font-inter text-xl md:text-2xl font-normal mb-4 md:mb-8">
                    {testimonies.description}
                  </p>
                  <p className="text-turquoise text-xl md:text-2xl font-inter font-semibold mb-2">
                    {testimonies.author}
                  </p>
                  <p className="font-inter text-lg md:text-xl font-medium">
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
