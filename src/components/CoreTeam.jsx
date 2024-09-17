import image from "../assets/images/MyPic.jpeg";
import ContactUs from "./ContactUs";

function CoreTeam() {
  const teamMembers = [
    {
      name: "Jordan Michael",
      role: "Front-End Developer",
      img: image,
    },
    {
      name: "Nora Hazel",
      role: "UI/UX Designer",
      img: image,
    },
    {
      name: "Otto Gonzalez",
      role: "Marketing Specialist",
      img: image,
    },
    { name: "Ryan Samuel", role: "Co-Founder", img: image },
    {
      name: "Jordan Michael",
      role: "Front-End Developer",
      img: image,
    },
    { name: "Nora Hazel", role: "UI/UX Designer", img: image },
  ];

  return (
    <div className=" flex justify-center flex-col mx-auto md:mx-[5vh] lg:mx-[30vh] my-8 px-4">
      <h1 className=" text-4xl md:text-[6vh] font-bold text-center font-poppins ">
        Top Contributors
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 mt-8 md:mt-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-lg p-2 flex flex-col items-center cursor-pointer hover:shadow-xl hover:border border-white transition-all duration-300 "
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4 object-cover m-2 md:m-4"
            />
            <h2 className="text-base md:text-xl font-semibold">
              {member.name}
            </h2>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="p-12 md:p-20"></div>
      <ContactUs />
    </div>
  );
}

export default CoreTeam;
