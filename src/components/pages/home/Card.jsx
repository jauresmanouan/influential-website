export default function Card({
  image,
  cardTitle,
  imageTitle = cardTitle,
  date,
  description,
}) {
  return (
    <div className="card card-compact rounded-none bg-base-100 w-80 shadow-xl font-inter">
      <figure>
        <img src={image} alt={imageTitle} />
      </figure>
      <div className="card-body">
        <h3 className="flex justify-end">{date}</h3>
        <h2 className="card-title font-medium">{cardTitle}</h2>
        <p className="font-normal">{description}</p>
      </div>
    </div>
  );
}
