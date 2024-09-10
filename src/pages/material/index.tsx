import Card from "../../components/card";

import img from "../../assets/eng.jfif";
import img1 from "../../assets/math.jfif";
import img2 from "../../assets/tech.jfif";
// type cardItemProps = {
//   image: string;
//   title: string;
//   catergory: string;
// };
const cardItem = [
  {
    image: img1,
    title: "The mistery of Math",
    catergory: "Mathematics",
  },
  {
    image: img1,
    title: "English Enssentails",
    catergory: "English",
  },
  {
    image: img2,
    title: "The Act of Tech",
    catergory: "Technology",
  },
  {
    image: img,
    title: "The mistery of Math",
    catergory: "Mathematics",
  },
  {
    image: img,
    title: "The mistery of Math",
    catergory: "Mathematics",
  },
  {
    image: img,
    title: "The mistery of Math",
    catergory: "Mathematics",
  },
];

const Material = () => {
  return (
    // <div>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 font-serif">
        {cardItem.map(({ image, catergory, title }) => {
          return (
            <Card
              image={image}
              category={catergory}
              title={title}
              author="John Doe"
            />
          );
        })}
      </div>
    // </div>
  );
};

export default Material;
