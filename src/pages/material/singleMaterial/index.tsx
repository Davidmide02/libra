import { useParams } from "react-router-dom";
import image from "../../../assets/eng.jfif";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useAddItem, useFetchItems } from "../../../utility/tanstackQuery";
import Loading from "../../../components/loader";
import { Bounce, toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Key, useState } from "react";

const SingleMaterial = () => {
  const { id } = useParams();
  const [hideReview, setHideReview] = useState(false);
  const {
    mutateAsync,
    isPending: isRequesting,
    data: requsted,
  } = useAddItem(`user/request/${id}`);

  const { mutateAsync: reviewAsync, isPending: isReviewing } = useAddItem(
    `user/review/${id}`
  );

  console.log("book id", id);

  const queryKey = "item";
  const { data, isPending } = useFetchItems(`user/material/${id}`, queryKey);

  const storedUser = localStorage.getItem("user");

  console.log("mate:", data);
  console.log(data?.material?.reviews);

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

  const formik = useFormik({
    initialValues: {
      review: "",
    },
    validationSchema: Yup.object({
      review: Yup.string()
        .required("It can be empty")
        .min(3, "review must be  3 or more"),
    }),
    onSubmit: async (values) => {
      try {
        const revResponse = await reviewAsync({
          comment: values.review,
          userId: user.userId,
          rating: 3,
        });

        console.log("reviews res:", revResponse);
        setHideReview(true);

        toast.success("review submitted", {
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
      } catch (error: unknown) {
        // axio error type
        console.log(typeof error);
        console.error("Can't submit review:", error);
        if (typeof error === "string") {
          console.log("upper error:", error);
          toast.warning(error, {
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
        } else {
          toast.error("Unknown error occur....", {
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
      }
    },
  });

  return (
    <>
      <p>No data</p>
      {isPending ? (
        <Loading />
      ) : (
        <>
          {data ? (
            <>
              <div className="single grid grid-cols-1 gap-4 md:grid-cols-2">
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
                  <div className="my-2 flex flex-col justify-center items-center">
                    {data.material.reviews.map(
                      (rev: {
                        _id: Key | null | undefined;
                        comment: string | null | undefined;
                        rating: number | null | undefined;
                        createdAt: string | null;
                      }) => (
                        <div
                          key={rev._id}
                          className="bg-gray-50 hover:shadow-2xl w-[50%] rounded-md p-2 border-2"
                        >
                          <div className="userinfo text-sm mb-2 flex justify-between items-center">
                            <p className="">John</p>
                            <p> {rev.createdAt?.slice(0, 7)}</p>

                            {/* <img src="" alt="img" /> */}
                          </div>
                          <p className="text-md text-sm md:text-base">
                            {rev.comment}
                          </p>
                          {/* <div className="py-[0.07rem] bg-indigo-400 mt-1" /> */}
                          <div className="rate text-sm flex justify-between items-center mt-2">
                            <p className="">rate: {rev.rating}/5</p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p>No reviews</p>
                )}
                {!hideReview && (
                  <form action="#" method="post" onSubmit={formik.handleSubmit}>
                    <div className="rev">
                      <textarea
                        name="review"
                        id=""
                        cols={40}
                        rows={5}
                        placeholder="Drop your review to help others...."
                        className="border-indigo-600 border-2 p-2 w-full focus:border-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.review}
                        required
                      ></textarea>
                      {formik.touched.review && formik.errors.review ? (
                        <p className="text-red-500">{formik.errors.review}</p>
                      ) : null}
                    </div>
                    {isReviewing ? (
                      <button
                        type="submit"
                        className="bg-indigo-600 text-white rounded-md p-2 w-full"
                      >
                        submitting...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="bg-indigo-600 text-white rounded-md p-2 w-full"
                      >
                        submit
                      </button>
                    )}
                  </form>
                )}
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
