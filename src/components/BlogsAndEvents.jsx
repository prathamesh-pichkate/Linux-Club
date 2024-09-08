import imag1 from "../assets/images/home1.jpeg"

const BlogsAndEvents = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-6 mx-4 md:mx-auto">

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-8">RECENT FROM BLOG</h2>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 mb-6">
              <img src={imag1} alt="Blog Image" className="w-32 h-24 object-cover rounded-lg" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Starting new session of body building this summer</h3>
                <p className="text-gray-500">Posted by: Admin <span className="text-blue-500">210</span></p>
                <p className="text-gray-500">Far far away, behind the word mountains</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE</button>
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <img src={imag1} alt="Blog Image" className="w-32 h-24 object-cover rounded-lg" />
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Starting new session of body building this summer</h3>
                <p className="text-gray-500">Posted by: Admin <span className="text-blue-500">210</span></p>
                <p className="text-gray-500">Far far away, behind the word mountains</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE</button>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-8">UPCOMING EVENTS</h2>
          <div className="flex flex-col gap-6 ">
            <div className="flex gap-4 mb-6">
              <div className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg h-fit">
                <p className="text-center">14</p>
                <p className="text-center text-sm">June</p>
                <p className="text-center text-sm">2016</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold ">Starting new session of body building this summer</h3>
                <p className="text-gray-500">Posted by: Admin <span className="text-blue-500">210</span></p>
                <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE</button>
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg h-fit">
                <p className="text-center">13</p>
                <p className="text-center text-sm">June</p>
                <p className="text-center text-sm">2016</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Starting new session of body building this summer</h3>
                <p className="text-gray-500">Posted by: Admin <span className="text-blue-500">210</span></p>
                <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">READ MORE</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogsAndEvents;