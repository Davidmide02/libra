import Card from "../../components/card";

import img from "../../assets/eng.jfif";
import img1 from "../../assets/math.jfif";
import img2 from "../../assets/tech.jfif";

const cardItem = [
  {
    image: img1,
    title: "The mistery of Math",
    catergory: "Mathematics",
    id: "1",
  },
  {
    image: img1,
    title: "English Enssentails",
    catergory: "English",
    id: "2",
  },
  {
    image: img2,
    title: "The Act of Tech",
    catergory: "Technology",
    id: "3",
  },
  {
    image: img,
    title: "The mistery of Math",
    catergory: "Mathematics",
    id: "4",
  },
  {
    image: img,
    title: "The mistery of Math",
    catergory: "Mathematics",
    id: "5",
  },
  {
    image: img,
    title: "The mistery of Math",
    catergory: "Mathematics",
    id: "6",
  },
];

const Material = () => {
  console.log('number here',cardItem.length) 
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 font-serif">
      {cardItem.map(({ image, catergory, title, id }) => {
        return (
          <Card
            image={image}
            category={catergory}
            title={title}
            author="John Doe"
            key={id}
          />
        );
      })}
    </div>
  );
};

export default Material;
