import { Instagram } from "lucide-react"; // Assuming you're using lucide-react for Instagram icons
import image from "../assets/images/home1.jpeg"; // Replace with your image path

const CoreTeam = () => {
  // Team members data
  const teamMembers = [
    { name: "Vrushali Kudande", title: "President", img: image },
    { name: "John Doe", title: "Vice President", img: image },
    { name: "Member 1", title: "Front-End Developer", img: image },
    { name: "Member 2", title: "UI/UX Designer", img: image },
    { name: "Member 3", title: "Marketing Specialist", img: image },
    { name: "Member 4", title: "Backend Developer", img: image },
    { name: "Member 5", title: "Security Specialist", img: image },
    { name: "Member 6", title: "DevOps Engineer", img: image },
    { name: "Member 7", title: "Security Specialist", img: image },
    { name: "Member 8", title: "DevOps Engineer", img: image },
  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-br py-10 px-4 my-6">
      {/* Main title */}
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">Meet Our Core Team</h1>

      {/* President & Vice President Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 lg:w-[80vh] max-w-6xl">
        {teamMembers.slice(0, 2).map((member, index) => (
          <div
            key={index}
            className="relative text-white p-6 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 rounded-lg bg-transparent shadow-cyan-500/50 hover:bg-slate-900 group"
          >
            {/* Image Section */}
            <div className="w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden border">
              <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
            </div>

            {/* Content that is always visible */}
            <div className="mt-6 flex flex-col items-center">
              <h3 className="text-xl md:text-2xl italic font-bold">{member.title}</h3>
              <h2 className="text-2xl md:text-4xl font-semibold">{member.name}</h2>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-blue-500">
                  <Instagram className="h-4 w-4 md:h-6 md:w-6" />
                </a>
                <a href="#" className="text-blue-500">
                  <Instagram className="h-4 w-4 md:h-6 md:w-6 " />
                </a>
                <a href="#" className="text-blue-500">
                  <Instagram className="h-4 w-4 md:h-6 md:w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Team Members Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 w-full lg:w-[75%]">
        {teamMembers.slice(2).map((member, index) => (
          <div
            key={index}
            className="relative text-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 bg-transparent shadow-cyan-500/50 hover:bg-slate-700 group"
          >
            {/* Image Section */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border">
              <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
            </div>

            {/* Content that is always visible */}
            <div className="flex flex-col items-center mt-2 md:mt-4 text-center">
              <h3 className="text-sm md:text-lg italic font-bold tracking-tight">{member.title}</h3>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{member.name}</h2>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <Instagram className="h-4 w-4 md:h-6 md:w-6 " />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <Instagram className="h-4 w-4 md:h-6 md:w-6 " />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <Instagram className="h-4 w-4 md:h-6 md:w-6 " />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTeam;
