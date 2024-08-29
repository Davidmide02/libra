import libaryImage from "../../assets/library.jpg";

const Home = () => {
  return (
    <div className="home p-8 flex flex-col-reverse items-center md:flex-row md:justify-between md:items-stretch">
      <div className="bg-blue-300 flex flex-col justify-around md:p-2 md:w-[45%]">
        <h1 className="text-2xl font-bold md:text-4xl">
          Your gateway to a world of knowledge. Explore, learn, and discover.
        </h1>
        <p className="pt-2 mt-4 leading-8 text-2xl">
          where every page opens a door to discovery. Immerse yourself in a vast
          ocean of knowledge, from timeless classics and cutting-edge research
          to hidden gems and local treasures.
        </p>
        <div className="btn mt-4 flex justify-evenly">
          <button>Get started</button>
          <button>Login</button>
        </div>
      </div>
      <div className="home-img bg-red-400">
        <img src={libaryImage} alt="" width={900} />
      </div>
      {/* Welocome to Libra outlet a hide gem for passionate readers */}
    </div>
  );
};

export default Home;
// Whether you're embarking on a
//           quest for ancient wisdom or exploring the latest innovations, our
//           extensive collection and intuitive search features ensure you’ll find
//           exactly what you’re looking for. Dive in and let your journey through
//           the world of books and information begin here!
