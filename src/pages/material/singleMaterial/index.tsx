import { useParams } from "react-router-dom";
import image from "../../../assets/eng.jfif";

const SingleMaterial = () => {
  const { single } = useParams();
  return (
    <div className="single font-serif">
      <h1>Name of book: {single}</h1>
      <div className="detail flex flex-col md:flex-row md:items-center md:justify-around">
        <div className="image md:w-[50%] md:h-[50%]">
          <img src={image} alt="img" className="rounded-md md:h-[30rem]" />
        </div>
        <div className="text-btn mt-4">
          <div className="text mb-4">
            <h4>Title: The ultimate guide for Guru</h4>
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
      <div className="review mt-4">
        <h3 className="text-center underline">Reviews:</h3>
        <p>The book is great</p>
        <textarea
          name="review"
          id=""
          cols={40}
          rows={5}
          placeholder="Drop your review to help others...."
          className="border-indigo-600 border-2 p-2"
        ></textarea>
        <button className="bg-indigo-600 text-white rounded-md p-2 w-full">
          submit
        </button>
      </div>
    </div>
  );
};

export default SingleMaterial;