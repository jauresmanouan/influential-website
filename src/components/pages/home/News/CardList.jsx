import Card from "../Card";

export default function CardList({ array, title }) {
  return (
    <div className="flex justify-center items-center">
      <div className="xl:h-full p-20 max-lg:p-2 flex justify-center items-start flex-col space-y-10">
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-7xl">
          {title}
        </h1>
        <div className="flex flex-coljustify-center items-center md:flex-row gap-10 md:gap-10">
          {array.map(({ id, image, cardTitle, date, description }) => (
            <Card
              key={id}
              image={image}
              cardTitle={cardTitle}
              date={date}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
