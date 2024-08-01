export default function Card({ image, title, date, description }) {
  return (
    <div className="max-w-80 rounded-none shadow-xl font-inter cursor-pointer duration-300 ease-in-out hover:scale-110">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h3 className="flex justify-end">{date}</h3>
        <h2 className="card-title font-medium">{title}</h2>
        <p className="font-normal">{description}</p>
      </div>
    </div>
  );
}
