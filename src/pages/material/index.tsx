import Card from "../../components/card";
// import img from "../../assets/eng.jfif";
import img1 from "../../assets/math.jfif";
// import img2 from "../../assets/tech.jfif";
import { useFetchItems } from "../../utility/tanstackQuery";
import Loading from "../../components/loader";

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

const Material = () => {
  const queryKey = "items";
  const { data, isPending, isError } = useFetchItems(
    "/user/material",
    queryKey
  );

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
