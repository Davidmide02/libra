import { Link } from "react-router-dom";

type CardProp = {
  image: string;
  title?: string;
  author?: string[];
  category?: string;
  count?: number;
  isavailable?: boolean;
  id?: string;
};

const Card = ({ title, image, author, category, id, count }: CardProp) => {
  return (
    <div className="card control bg-gray-50 p-2 rounded-xl h-[70%] mt-4 md:mt-0">
      <div className="img bg-gray-200 rounded-xl w-auto h-[50%]">
        <img
          src={image}
          alt="image"
          className="h-[20rem] md:h-full w-full rounded-xl"
        />
      </div>
      <div className="text-img py-4">
        <h1>Title: {title}</h1>
        <p>Author: {author && author.length > 0 ? author[0] : "John Doe"}</p>
        <p>Category: {category}</p>
        <p>Available: {count}</p>
      </div>
      <div className="btn bg-gray-400 rounded-md">
        <Link to={`/material/${id}`}>
          <button className="bg-indigo-600 text-white rounded-md p-2 w-full">
            Check
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
