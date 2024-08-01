import Card from "../Card";

export default function Cards({ array, title }) {
  return (
    <div className="flex justify-center items-center relative -z-10">
      <div className="xl:h-full p-20 max-lg:p-2 flex justify-center items-start flex-col space-y-10">
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-7xl">
          {title}
        </h1>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-10">
          {array.map(({ id, image, title, date, description }) => (
            <Card
              key={id}
              image={image}
              title={title}
              date={date}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
