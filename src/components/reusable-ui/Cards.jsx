import Card from "./Card";

export default function Cards({ array, title, tv, team, className }) {
  return (
    <div className={className}>
      <div className="xl:h-full p-20 max-lg:p-2 flex justify-center items-start flex-col space-y-10">
        <h1 className="font-montserrat font-extrabold text-4xl sm:text-7xl">
          {title}
          {tv && (
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Television.webp"
              alt="Television"
              className="h-10 lg:h-20 w-10 lg:w-20 align-bottom inline"
            />
          )}
          {team && (
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Flexed%20Biceps.webp"
              alt="Flexed Biceps"
              className="h-10 lg:h-20 w-10 lg:w-20 align-bottom inline"
            />
          )}
        </h1>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-xl:grid-cols-2 gap-10">
          {array.map(({ id, image, title, date, description, link }) => (
            <Card
              key={id}
              image={image}
              title={title}
              date={date}
              description={description}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
