import image1 from "../assets/images/event2.jpg";

const PassedEvents = () => {
  const passedEvents = [
    {
      id: 1,
      title: "Event One",
      date: "August 10, 2024",
      description: "A wonderful event filled with exciting activities.",
      imageUrl: image1,
    },
    {
      id: 2,
      title: "Event Two",
      date: "August 10, 2024",
      description: "An informative session about the latest tech trends.",
      imageUrl: image1,
    },
    {
      id: 3,
      title: "Event Three",
      date: "August 10, 2024",
      description: "A fun-filled day with hands-on workshops.",
      imageUrl: image1,
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 md:px-12 lg:px-20">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
        Past Events
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500"></div>

        <div className="space-y-16">
          {passedEvents.map((event, index) => (
            <div
              key={event.id}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Event Image */}
              <div className="w-full md:w-1/2 px-4 md:px-0 flex justify-center md:justify-start">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-md shadow-lg"
                />
              </div>

              {/* Event Details */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-4 md:px-0">
                <div className="bg-blue-500 text-white py-2 px-4 rounded-md text-center md:text-left">
                  {event.date}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-4">
                  {event.title}
                </h3>
                <p className="text-gray-700 mt-2 text-center md:text-left">
                  {event.description}
                </p>
              </div>

              {/* Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassedEvents;
