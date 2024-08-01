export default function Card({
  image,
  title,
  date,
  description,
}) {
  return (
    <div className="card card-normal rounded-none bg-base-100 shadow-xl font-inter">
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
