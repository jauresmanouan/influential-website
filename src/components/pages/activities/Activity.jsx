import { motion } from "framer-motion";
import BlurredImage from "../../reusable-ui/BlurredImage";

export default function Activity({ image, title, hash }) {
  const transition = { duration: 1, ease: [0.34, 1.56, 0.64, 1] };

  return (
    <div className="h-full md:h-[63rem] flex flex-col md:flex-row gap-5 max-md:gap-10 justify-center items-center max-lg:pl-3">
      <motion.div
        initial={{ width: "20rem", height: "14rem" }}
        animate={{ width: "24rem", height: "90%" }}
        transition={{ ...transition }}
        className="md:order-2 flex justify-center items-center"
      >
        <BlurredImage
          src={image}
          alt={title}
          hash={hash}
          className="h-80 md:h-full w-80 md:w-96 object-cover rounded-3xl md:rounded-[9rem] max-md:mt-10"
        />
      </motion.div>
      <div className="w-80 md:w-[38rem]">
        <motion.h1
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, ...transition }}
          className="font-montserrat font-extrabold text-2xl sm:text-5xl lg:text-7xl leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, ...transition }}
          className="font-inter font-semibold text-sm sm:text-base lg:text-lg leading-tight text-justify mt-5 md:mt-10 max-md:mb-10"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo
          nobis voluptas libero. Cupiditate reiciendis itaque, magni voluptate
          suscipit provident quae quibusdam dolor reprehenderit aperiam, nihil
          optio temporibus quod rem. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Odit id ipsam ducimus maiores iste deleniti, in quas
          deserunt itaque voluptas, architecto ipsum molestias aspernatur <br />
          <br />
          quaerat reprehenderit, repellendus delectus excepturi iure! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          praesentium ratione reprehenderit cum porro explicabo quidem
          necessitatibus provident blanditiis aspernatur commodi maxime unde
          quam ipsum ad, assumenda dicta vel magnam?Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Saepe iure dignissimos eos quibusdam
          cumque consequatur assumenda, vero aut fugit dolorum quisquam ratione
          in officia minus, voluptatum illo molestiae possimus illum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dicta illo nobis
          voluptas libero. Cupiditate reiciendis itaque, magni voluptate
          suscipit provident quae quibusdam dolor reprehenderit aperiam, nihil
          optio temporibus quod rem. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Odit id ipsam ducimus maiores iste deleniti, in quas
          deserunt itaque voluptas, architecto ipsum molestias aspernatur
        </motion.p>
      </div>
    </div>
  );
}
