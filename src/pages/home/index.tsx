import libaryImage from "../../assets/library.jpg";
import Card from "../../components/card";
import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <>
      <div className="home p-8 flex flex-col-reverse items-center md:flex-row md:justify-between md:items-stretch">
        <div className="b flex flex-col justify-center md:p-2 md:w-[45%]">
          <h1 className="text-2xl font-bold md:text-3xl py-3">
            Your gateway to a world of knowledge. Explore, learn, and discover.
          </h1>
          <p className="leading-none md:leading-7 text-xl py-2">
            where every page opens a door to discovery. Immerse yourself in a
            vast ocean of knowledge, from timeless classics and cutting-edge
            research to hidden gems and local treasures.
          </p>
          <div className="btn flex justify-around">
            <button className="border-blue-200 border-2 rounded-md px-2">
              Get started
            </button>
            <button>Login</button>
          </div>
        </div>
        <div className="home-img bg-red-400 md:w-[50%]">
          <img src={libaryImage} alt="" width={900} />
        </div>
        {/* Welocome to Libra outlet a hide gem for passionate readers */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card image={logo} />
        <Card image={logo} />
        <Card image={logo} />

        <Card image={logo} />
      </div>
    </>
  );
};

export default Home;
// Whether you're embarking on a
//           quest for ancient wisdom or exploring the latest innovations, our
//           extensive collection and intuitive search features ensure you’ll find
//           exactly what you’re looking for. Dive in and let your journey through
//           the world of books and information begin here!
