import Card from "../../components/card";

// import img from "../../assets/eng.jfif";
import img1 from "../../assets/math.jfif";
// import img2 from "../../assets/tech.jfif";
import { useFetchItems } from "../../utility/tanstackQuery";
import Loading from "../../components/loader";
import { useEffect } from "react";

export type CardProp = {
  image: string;
  title?: string;
  author?: string[];
  category?: string;
  count?: number;
  isavailable?: boolean;
  _id?: string;
  bookState?: boolean;
};

type ChildComponentProps = {
  setMaterials: React.Dispatch<React.SetStateAction<CardProp[] | null>>;
};

const Material: React.FC<ChildComponentProps> = ({ setMaterials }) => {
  const { data, isPending, isError } = useFetchItems("/user/material");
  useEffect(() => {
    if (data && data.allMaterials) {
      setMaterials(data.allMaterials);
    }
  }, [data, setMaterials]);

  return (
    <>
      {isError ? <p>Can't fetch materials try again or refresh</p> : null}
      {isPending ? (
        <Loading />
      ) : (
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 font-serif">
          {data &&
            data.allMaterials.map((dat: CardProp) => {
              return (
                <Card
                  image={dat.image || img1}
                  category={dat.category || "English"}
                  title={dat.title}
                  author={dat.author || ["John Doe"]}
                  count={dat.count}
                  isavailable={dat.isavailable || dat.bookState}
                  id={dat._id}
                  key={dat._id}
                />
              );
            })}
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
// "req uests":["66ca386a583d34eda00f4acc"],
// "reviews":["66ca4261f044a82508208ab0"]}}

// {"json":{"isavailabe":true,
//   "reviews":[],
//   "requests":[],
//   "_id":"66b4dd5d0f9f4f1abdec0e82",
//   "title":"Atomic Habits",
//   "author":["Olamide David"],
//   "count":2,
//   "catergory":"Non Fiction",
//   "bookState":"avilable",
//   "createdAt":"2024-08-08T14:59:41.652Z",
//   "updatedAt":"2024-08-08T14:59:41.652Z",
//   "__v":0}}
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
