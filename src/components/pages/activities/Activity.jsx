export default function Activity({ image, title }) {
  return (
    <div className="h-full md:h-[63rem] flex flex-col md:flex-row gap-5 max-md:gap-10 justify-center items-center max-lg:pl-3">
      <img
        src={image}
        alt={title}
        className="h-80 md:h-full w-80 md:w-96 md:order-2 object-cover rounded-3xl md:rounded-[9rem] md:scale-90 max-md:mt-10"
      />
      <div className="w-80 md:w-[38rem]">
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-7xl leading-tight">
          {title}
        </h1>
        <p className="font-inter font-semibold text-sm sm:text-base lg:text-lg leading-tight text-justify mt-5 md:mt-10 max-md:mb-10">
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
        </p>
      </div>
    </div>
  );
}
