import { useParams } from "react-router-dom";
import image from "../../../assets/eng.jfif";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

const SingleMaterial = () => {
  const { single } = useParams();
  return (
    <>
      <div className="single font-serif grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="image md:size-[50%] bg-green-600">
          <img src={image} alt="img" className="rounded-md" />
        </div>
 
        <div className="text flex flex-col items-stretch justify-between">
          <div className="back-btn">
            <Link
              to={`/material`}
              className="bg-indigo-600 text-white rounded-md px-4 py-2 flex items-center justify-center"
            >
              <ArrowLeftIcon className="w-12 h-8" />
              Back
            </Link>
          </div>

          <div className="text-base md:text-xl px-4 text-center md:text-left">
            <h4>Title: {single}</h4>
            <p>Author: John Joel</p>
            <p>Category: Mathematic</p>
          </div>

          <div className="btn bg-gray-400 rounded-md">
            <button className="bg-indigo-600 text-white rounded-md p-2 w-full">
              Request
            </button>
          </div>
        </div>
      </div>
      <div className="review py-2 mt-8">
        <h3 className="text-center underline text-xl">Reviews:</h3>
        <p>The book is great</p>
        <textarea
          name="review"
          id=""
          cols={40}
          rows={5}
          placeholder="Drop your review to help others...."
          className="border-indigo-600 border-2 p-2 w-full"
        ></textarea>
        <button className="bg-indigo-600 text-white rounded-md p-2 w-full">
          submit
        </button>
      </div>
    </>
  );
};

export default SingleMaterial;
