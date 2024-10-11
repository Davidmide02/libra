import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CustomeCarousel } from "../../components/carousel";
import img from "../../assets/homeimg/illu.avif";
import img1 from "../../assets/homeimg/illu1.avif";
import img2 from "../../assets/homeimg/illu2.avif";
import img3 from "../../assets/homeimg/illuc.avif";
import Footer from "../../components/footer";
const cardItem = [
  {
    img: img1,
    title: "Creativity",
    des: "Mathematics",
    id: "1",
  },
  {
    img: img3,
    title: "Curiousity",
    des: "English",
    id: "2",
  },
  {
    img: img2,
    title: "Idea",
    des: "Technology",
    id: "3",
  },
  {
    img: img,
    title: "Intuition",
    des: "Mathematics",
    id: "4",
  },
  // {
  //   img: img,
  //   title: "Quest",
  //   des: "Mathematics",
  //   id: "5",
  // },
  // {
  //   img: img,
  //   title: "Spark",
  //   des: "Mathematics",
  //   id: "6",
  // },
];

const Home = () => {
  return (
    <>
      <div className="nav flex justify-between items-center">
        <div className="logo flex items-center">
          <img src={logo} alt="logo" className="w-[15%]" />
        </div>
        <div className="auth flex w-[50%] justify-between md:w-auto">
          <Link to={"/login"}>
            <button className="p-1 border-2 rounded-md border-indigo-600 hover:bg-gray-100">
              Log in
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="p-1.5 ml-2 bg-indigo-600 rounded-md text-gray-50 hover:bg-indigo-400">
              Sign up
            </button>
          </Link>
        </div>
      </div>

      <div className="home p-8 flex flex-col-reverse items-center md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col justify-center md:p-2 md:w-[45%]">
          <div className="title-des">
            <h1 className="text-2xl font-bold md:text-3xl py-3">
              Your gateway to a world of knowledge.
              <span className="text-indigo-600 ml-0.5 font-serif">Explore</span>
              , <span className="text-indigo-600 font-serif">Learn</span>, and{" "}
              <span className="text-indigo-600 font-serif">Discover</span>.
            </h1>
            <p className="leading-none md:leading-7 text-xl py-2">
              where every page opens a door to discovery. Immerse yourself in a
              vast ocean of knowledge, from timeless classics and cutting-edge
              research to hidden gems and local treasures.
            </p>
          </div>
          <div className="btn text-center">
            <Link to={"/register"}>
              <button className="border-indigo-600 border-2 rounded-md px-2 hover:bg-gray-100">
                Get started
              </button>
            </Link>
            <Link to={"/login"}>
              <button className="bg-indigo-600 px-4 py-0.5 rounded-md ml-2 text-gray-50 hover:bg-indigo-400">
                Login
              </button>
            </Link>
          </div>
        </div>

        <div className="home-img md:w-[50%] p-2">
          <CustomeCarousel data={cardItem} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
