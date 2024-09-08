import { LaptopMinimal } from 'lucide-react';

const activities = [
    {
      title: 'Workshops',
      description: 'Regular workshops on topics like system administration, scripting, and security.',
      icon: <LaptopMinimal size={48}  color="green"/>,
    },
    {
      title: 'Open Source',
      description: 'Engage in open-source projects and learn from real-world coding experiences.',
      icon: <LaptopMinimal size={48} color="green"/>,
    },
    {
      title: 'Hackathons',
      description: 'Participate in coding competitions to solve problems and innovate.',
      icon: <LaptopMinimal size={48} color="green"/>,
    },
    {
      title: 'Guest Lectures',
      description: 'Attend lectures by industry professionals on various Linux and tech topics.',
      icon: <LaptopMinimal size={48} color="green"/>,
    },
    {
      title: 'Project Development',
      description: 'Work on projects that solve real-world problems using Linux and open-source tools.',
      icon: <LaptopMinimal size={48} color="green"/>,
    },
    {
      title: 'Community Meetups',
      description: 'Join meetups to discuss the latest in Linux, share knowledge, and network.',
      icon: <LaptopMinimal size={48} color="green"/>,
    },
  ];

  const OurActivities = () => {
    return (
        <div className="container mx-auto my-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Activities</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 md:gap-12">
            {activities.map((activity, index) => (
              <div key={index} className="flex flex-col justify-center max-w-80 h-fit text-center gap-2 md:gap-4 lg:gap-6">
                <a href="" className='flex justify-center mx-2'>{activity.icon}</a>
                <h3 className='text-base md:text-2xl lg:text-3xl font-bold mx-2'>{activity.title}</h3>
                <p className='text-base md:text-base sm:text-[10px] mx-4'>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default OurActivities;