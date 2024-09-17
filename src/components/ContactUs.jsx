function ContactUs() {
  return (
    <div className="bg-white text-black py-12 lg:mx-[10vh]">
      <div className="max-w-7xl flex-1 flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Section - Contact Info */}
        <div className=" text-white rounded-lg shadow-lg flex-1 flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-300">
            Feel free to contact us! Submit your queries here and we will get
            back to you as soon as possible.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-6">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-blue-400">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-white hover:text-pink-400">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg py-8 flex-1">
          <h2 className="text-2xl font-semibold mb-6">Send Us Message</h2>
          <form>
            <div className="mb-2 md:mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-2 md:mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-2 md:mb-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-2 md:mb-4">
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-md hover:bg-indigo-700 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
