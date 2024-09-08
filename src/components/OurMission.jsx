// import React from 'react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col w-72 h-72 justify-center items-center p-6 rounded-sm shadow-md bg-white">
      <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center text-base">{description}</p>
    </div>
  );
}

function OurMission() {
    const services = [
      {
        icon: <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z" /></svg>,
        title: 'Strategy',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      },
      {
        icon: <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
        title: 'Explore',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      },
      {
        icon: <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>,
        title: 'Direction',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      },
      {
        icon: <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 10V14m6 4v-4m-6 4v-4m6 4v-4" /></svg>,
        title: 'Expertise',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
      }
    ];
  
    return (
      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default OurMission;
  