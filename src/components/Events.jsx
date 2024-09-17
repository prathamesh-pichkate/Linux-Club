import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountTime from "../components/CountTime.jsx";
import PassedEvent from "./PassedEvents.jsx";

const Events = () => {
  // Slick Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // 3 seconds
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    arrows: false,
    fade: true,
  };

  return (
    <>
      <div className="relative w-screen">
        <Slider {...settings} className="w-full">
          {/* Event 1 */}
          <div className="relative w-full">
            <img
              src={event1}
              alt="Event 1"
              className="w-full h-[40vh] md:h-[50vh] lg:h-[75vh] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-8 lg:px-12">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Upcoming Events</h1>
              <p className="text-base md:text-lg lg:text-xl mb-8 max-w-lg">
                Join us for our upcoming events and be a part of the exciting activities we have lined up. Stay tuned for more details and make sure to register early!
              </p>
              <div className="flex flex-row gap-4">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Know More
                </a>
                <a
                  href="#"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Register
                </a>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="relative w-full">
            <img
              src={event2}
              alt="Event 2"
              className="w-full h-[40vh] md:h-[50vh] lg:h-[75vh] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-8 lg:px-12">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Upcoming Events</h1>
              <p className="text-base md:text-lg lg:text-xl mb-8 max-w-lg">
                Join us for our upcoming events and be a part of the exciting activities we have lined up. Stay tuned for more details and make sure to register early!
              </p>
              <div className="flex flex-row gap-4">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Know More
                </a>
                <a
                  href="#"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <CountTime />
      <PassedEvent />
    </>
  );
};

export default Events;
