import { useParams } from "react-router-dom";
import image from "../../../assets/eng.jfif";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useAddItem, useFetchItems } from "../../../utility/tanstackQuery";
import Loading from "../../../components/loader";
import { Bounce, toast } from "react-toastify";
import { Key } from "react";

const SingleMaterial = () => {
  const { id } = useParams();
  const {
    mutateAsync,
    isPending: isRequesting,
    data: requsted,
  } = useAddItem(`user/request/${id}`);
  console.log("book id", id);

  const queryKey = "item";
  const { data, isPending } = useFetchItems(`user/material/${id}`, queryKey);
  const storedUser = localStorage.getItem("user");

  console.log("mate:", data);
  console.log(data.material.reviews);

  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleRequest = async () => {
    console.log("in req", user.userId);
    try {
      const res = await mutateAsync({ userId: user.userId });
      console.log("req res:", res);
      toast.success(res?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.log("error here:", error);
      toast.success("Can't complete your request, kindly try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <>
          {data ? (
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
                    <h4>Title: {data.material?.title}</h4>
                    <p>Author: {data.material?.author}</p>
                    <p>Category: {data.material?.category || "Tech"}</p>
                    <p>Count: {data.material?.count}</p>
                    <p></p>
                  </div>

                  <div className="btn bg-gray-400 rounded-md">
                    {isRequesting ? (
                      <button
                        className="bg-indigo-300 text-white rounded-md p-2 w-full"
                        onClick={handleRequest}
                        disabled
                      >
                        Requesting...
                      </button>
                    ) : (
                      <>
                        {requsted ? (
                          <button
                            className="bg-indigo-300 text-white rounded-md p-2 w-full"
                            disabled
                          >
                            Requested
                          </button>
                        ) : (
                          <button
                            className="bg-indigo-600 text-white rounded-md p-2 w-full"
                            onClick={handleRequest}
                          >
                            Request
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="review py-2 mt-8">
                <h3 className="text-center underline text-xl">Reviews:</h3>
                {data ? (
                  <div>
                    {data.material.reviews.map(
                      (rev: {
                        _id: Key | null | undefined;
                        comment: string | null | undefined;
                        rating: number | null | undefined;
                        createdAt: string | null;
                      }) => (
                        <div key={rev._id}>
                          <p>comment: {rev.comment}</p>
                          <p>rate: {rev.rating}/5</p>
                          <p>created: {rev.createdAt}</p>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p>No reviews</p>
                )}
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
          ) : (
            <div className=" my-auto w-[80%] text-center">
              <p className="text-indigo-600 font-bold text-2xl">
                Can't fetch material, Kindly refresh
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SingleMaterial;

// check if request as been made already when user check out a book
