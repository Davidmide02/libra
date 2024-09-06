// import React from 'react'
import { Link } from "react-router-dom";

type CardProp = {
  image: string;
  title?: string;
  author?: string;
  category?: string;
};

const Card = ({ title, image, author, category }: CardProp) => {
  return (
    <div className="control bg-gray-50 p-2 rounded-xl h-[70%] mt-4 md:mt-0">
      <div className="img bg-gray-200 rounded-xl w-auto h-[50%]">
        <img
          src={image}
          alt="image"
          className="h-[20rem] md:h-full w-full rounded-xl"
        />
      </div>
      <div className="text-img py-4">
        <h1>Title: {title}</h1>
        <p>Author: {author}</p>
        <p>Category: {category}</p>
      </div>
      <div className="btn bg-gray-400 rounded-md">
        <Link to={`/material/${title}`}>
          <button className="bg-indigo-600 text-white rounded-md p-2 w-full">
            Check
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
