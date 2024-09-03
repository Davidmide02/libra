// import React from 'react'

type CardProp = {
  image: string;
  title?: string;
  des?: string;
};

const Card = ({ title, image }: CardProp) => {
  return (
    <div className="control bg-transparent">
      <div className="img bg-gray-200 rounded-xl w-auto">
        <img src={image} alt="image" />
      </div>
      <div className="text-img">
        <h1>title{title}</h1>
        <p>Author: John Doe</p>
        <p>category: Science</p>
      </div>
      <div className="btn bg-gray-400 rounded-md">
        <button className="bg-indigo-600 text-white rounded-md p-2 w-full">Check</button>
      </div>
    </div>
  );
};

export default Card;
