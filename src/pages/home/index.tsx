import { Link } from "react-router-dom";
import libaryImage from "../../assets/library.jpg";
import logo from "../../assets/logo.svg";
// import Card from "../../components/card";
// import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <>
      <div className="nav flex justify-between items-center">
        <div className="logo flex items-center">
          <img src={logo} alt="logo" className="w-[15%]" />
        </div>
        <div className="auth flex w-[50%] bg-green-400 justify-between md:w-auto">
          <Link to={"/login"}>
            <button className="p-1 border-2 rounded-md text-indigo-600 border-indigo-600 hover:bg-gray-100">
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
      <div className="home p-8 flex flex-col-reverse items-center md:flex-row md:justify-between md:items-stretch">
        <div className="b flex flex-col justify-center md:p-2 md:w-[45%]">
          <div className="title-des">
            <h1 className="text-2xl font-bold md:text-3xl py-3">
              Your gateway to a world of knowledge.
              <span className="text-indigo-600 ml-0.5 md:ml-0 font-serif">
                Explore
              </span>
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

        <div className="home-img md:w-[50%]">
          <img src={libaryImage} alt="" width={900} />
        </div>
        {/* Welocome to Libra outlet a hide gem for passionate readers */}
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card image={logo} />
        <Card image={logo} />
        <Card image={logo} />

        <Card image={logo} />
      </div> */}
    </>
  );
};

export default Home;
// Whether you're embarking on a
//           quest for ancient wisdom or exploring the latest innovations, our
//           extensive collection and intuitive search features ensure you’ll find
//           exactly what you’re looking for. Dive in and let your journey through
//           the world of books and information begin here!
