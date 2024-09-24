import Card from "../../components/card";

// import img from "../../assets/eng.jfif";
import img1 from "../../assets/math.jfif";
// import img2 from "../../assets/tech.jfif";
import { useFetchItems } from "../../utility/tanstackQuery";
import Loading from "../../components/loader";
import { Key } from "react";

// const cardItem = [
//   {
//     image: img1,
//     title: "The mistery of Math",
//     catergory: "Mathematics",
//     id: "1",
//   },
//   {
//     image: img1,
//     title: "English Enssentails",
//     catergory: "English",
//     id: "2",
//   },
//   {
//     image: img2,
//     title: "The Act of Tech",
//     catergory: "Technology",
//     id: "3",
//   },
//   {
//     image: img,
//     title: "The mistery of Math",
//     catergory: "Mathematics",
//     id: "4",
//   },
//   {
//     image: img,
//     title: "The mistery of Math",
//     catergory: "Mathematics",
//     id: "5",
//   },
//   {
//     image: img,
//     title: "The mistery of Math",
//     catergory: "Mathematics",
//     id: "6",
//   },
// ];

const Material = () => {
  const { data, isPending, error } = useFetchItems("/user/material");

  console.log("tan data here:", data, "tanstack error:", error);

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 font-serif">
          {data.allMaterial.map(
            (dat: {
              category: string | undefined;
              title: string | undefined;
              author: (string | undefined)[];
              _id: Key | null | undefined;
            }) => {
              return (
                <Card
                  image={img1}
                  category={dat.category}
                  title={dat.title}
                  author={dat.author[0]}
                  key={dat._id}
                />
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default Material;

// {"json":{"_id":"66b4da21c880083f7467974b",
// "title":"rich man 2",
// "author":["Olamide David"],
// "bookState":"avilable",
// "count":2,
// "createdAt":"2024-08-08T14:45:53.565Z",
// "updatedAt":"2024-08-24T20:28:17.465Z",
// "__v":2,
// "isavailabe":true,
// "requests":["66ca386a583d34eda00f4acc"],
// "reviews":["66ca4261f044a82508208ab0"]}}
