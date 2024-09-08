import penguin from "../assets/images/image.png";
import AboutUs from "../components/AboutUs";
import OurMission from "../components/OurMission";
const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-6 lg:mt-20 max-h-fit mx-[5vw]">
        {/* Penguin Image for Mobile View */}
        <div className="lg:hidden flex justify-center mb-2">
          <img
            src={penguin}
            alt="linux-penguin"
            className="h-[30vh] sm:h-[50vh] hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col text-white my-10 text-center lg:text-left">
          <h1 className="text-[6vh] sm:text-[10vh] lg:text-[15vh] font-bold tracking-wide">
            Linux Club
          </h1>
          <p className="text-[3vh] sm:text-[3vh] lg:text-[5vh] tracking-wide bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Learn, Grow, and Share
          </p>
          <div className="flex flex-row justify-center lg:justify-start my-4 space-x-4">
            <a
              href="#"
              className="py-2 px-4 bg-gradient-to-r from-purple-400 to-purple-800 w-fit rounded-md"
            >
              Join Team
            </a>
            <a
              href="#"
              className="py-2 px-4 bg-gradient-to-r from-purple-400 to-purple-800 w-fit rounded-md"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Penguin Image for Larger Screens */}
        <div className="hidden lg:flex m-4">
          <img
            src={penguin}
            alt="linux-penguin"
            className="h-[50vh] sm:h-[60vh] lg:h-[70vh] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Adding a Spacer for Clear Separation */}
      <div className="my-4"></div>

      {/* About Us Section */}
      <AboutUs />


      {/* Adding a Spacer for Clear Separation */}
      <div className="my-12"></div>

      {/* About Us Section */}
      <OurMission />
    </>
  );
};

export default Home;
