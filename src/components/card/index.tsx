// import React from 'react'

type CardProp = {
  image: string;
  title?: string;
  author?: string;
  category?: string;
};

const Card = ({ title, image, author, category }: CardProp) => {
  return (
    <div className="control bg-green-300">
      <div className="img bg-gray-200 rounded-xl w-auto h-[50%]">
        <img src={image} alt="image" className="h-full w-full rounded-xl" />
      </div>
      <div className="text-img">
        <h1>title: {title}</h1>
        <p>Author: {author}</p>
        <p>category: {category}</p>
      </div>
      <div className="btn bg-gray-400 rounded-md">
        <button className="bg-indigo-600 text-white rounded-md p-2 w-full">
          Check
        </button>
      </div>
    </div>
  );
};

export default Card;
