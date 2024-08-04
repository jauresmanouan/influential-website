import { useNavigate } from "react-router-dom";

export default function Card({ image, title, date, description, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      className="max-w-80 rounded-none shadow-xl font-inter cursor-pointer duration-300 ease-in-out hover:scale-110"
      onClick={handleClick}
    >
      <figure>
        <img src={image} alt={title} className="w-80 h-56 object-cover"/>
      </figure>
      <div className="card-body bg-white">
        <h3 className="flex justify-end">{date}</h3>
        <h2 className="card-title font-semibold">{title}</h2>
        <p className="font-normal">{description}</p>
      </div>
    </div>
  );
}
