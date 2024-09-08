import aboutImage from "../assets/images/home2.jpeg";
// import "./About.css";

const AboutUs = () => {
  return (
    <section className="relative text-white">
      <div className="container mx-auto flex flex-col gap-10 lg:flex-row items-center px-6 lg:px-16 py-20">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <div className="relative w-full h-full lg:w-[60vh] lg:h-[50vh] rounded-md overflow-hidden">
            <img
              src={aboutImage}
              alt="About Image"
              className="object-cover w-fit h-fit"
            />
            <div className="absolute inset-0 border-1 rounded-md"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About</h1>
          <h3 className="text-lg uppercase tracking-wide font-semibold mb-4">
          Discover Linux Club
          </h3>
          
          <p className="text-base lg:text-lg leading-relaxed mb-8">
          At the Linux Club of PDEA College Of Engineering, we pride ourselves on being a vibrant community of students who are deeply passionate about Linux and open-source technology. Our club offers a dynamic platform where members can learn, explore, and actively contribute to the world of Linux. Through our collective efforts, we aim to support each other's growth and drive advancements in the open-source community.
          </p>
          <a
            href="#"
            className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-yellow-500 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
