import { useState } from "react";

const posts = [
  {
    category: "Design",
    title: "10 Tips for Crafting the Perfect UX Portfolio",
    description:
      "Learn how to showcase your design skills and stand out in a crowded job market.",
    author: "Emily Lee",
    date: "3 April 2023",
    avatar:
      "https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",
    poster:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  },
  {
    category: "Product",
    title: "The Future of Mobile App Development",
    description:
      "Discover the latest trends and techniques that will shape the future of mobile app development.",
    author: "John Smith",
    date: "1 April 2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    poster:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  },
  {
    category: "Software Engineering",
    title: "How to Launch a Successful Startup",
    description:
      "Learn the essential steps to launch a successful startup and make your dreams a reality.",
    author: "Sarah Brown",
    date: "28 March 2023",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    poster:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Customer Success",
    title: "The Benefits of Mindfulness Meditation",
    description:
      "Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",
    author: "David Kim",
    date: "25 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    poster:
      "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    category: "Design",
    title: "Why Learning a Second Language is Important",
    description:
      "Explore the benefits of learning a second language and how it can improve your cognitive abilities.",
    author: "Maria Rodriguez",
    date: "22 March 2023",
    avatar: "https://randomuser.me/api/portraits/men/97.jpg",
    poster:
      "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

const filters = [
  "Design",
  "Product",
  "Software Engineering",
  "Customer Success",
];

function Blog() {
  const [activeFilter, setActiveFilter] = useState("Design");

  // Filter posts based on selected category
  const filteredPosts = posts.filter((post) => post.category === activeFilter);

  return (
    <div className="mx-auto max-w-7xl px-2">
      {/* Header */}
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
        <p className="text-3xl font-bold text-white md:text-5xl md:leading-10">
          Resources and insights
        </p>
        <p className="max-w-4xl text-base text-white md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          veritatis voluptates neque itaque repudiandae sint, explicabo
          assumenda quam ratione placeat?
        </p>
        {/* Search bar */}
        <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
          <input
            className="flex h-10 w-full rounded-md bg-transparent border-white px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-white/30 focus:ring-offset-1"
            type="text"
            placeholder="Search Topics"
          />
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
          >
            Search
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
        <div className="flex w-full items-end border-b border-gray-100">
          {filters.map((filter) => (
            <div
              className={`cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-200 ${
                activeFilter === filter ? "border-b-2 border-black" : ""
              }`}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <div key={post.title} className="border text-white">
            <img
              src={post.poster}
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-white">
                #{post.category}
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-white">
                {post.title}
              </p>
              <p className="mt-4 w-full text-sm leading-normal text-gray-300">
                {post.description}
              </p>
              <div className="mt-4 flex space-x-3">
                <img
                  className="h-full w-10 rounded-lg"
                  src={post.avatar}
                  alt={post.author}
                />
                <div>
                  <p className="text-sm font-semibold leading-tight text-white">
                    {post.author}
                  </p>
                  <p className="text-sm leading-tight text-gray-300">
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
