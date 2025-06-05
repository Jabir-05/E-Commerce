import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import hero from "../assets/hero.jpg"; // Ensure this path is correct
import HomeCard from '../components/HomeCard';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <HomeCarousel/>
      <section className="w-full">
        <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white leading-snug">
              Easiest way to get your clothes, food, medicine, and{" "}
              <span className="text-yellow-400">
                more—delivered right to your doorstep.
              </span>
            </h1>

            <ul className="space-y-3">
              {[
                "Fast and Reliable Delivery",
                "Wide Range of Products",
                "Convenient Online Ordering",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-700 dark:text-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>

            {/* Email Form */}
            <form className="flex flex-col sm:flex-row items-center gap-3 mt-6 lg:max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-gray-200 placeholder-gray-400 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-9  bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Join Us
              </button>
            </form>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={hero}
              alt="Delivery Hero"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        

        {/* Highlight Section */}
        <div className="max-w-5xl mx-auto mt-10 px-4">
          <div className="flex items-start bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <img
              src="https://img.icons8.com/color/48/000000/delivery.png"
              alt="Delivery Icon"
              className="w-12 h-12 mr-4"
            />
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
              Discover the ultimate convenience with our all-in-one delivery platform! Whether you
              need groceries, clothing, medicine, or daily essentials, we bring everything right to
              your doorstep—fast, safe, and hassle-free. Enjoy a seamless shopping experience, save
              time, and let us handle the rest.{" "}
              <strong className="text-blue-500">Shop smarter, live better!</strong>
            </p>
          </div>
        </div>
      </section>
      <h1 className='text-center text-2xl font-bold text-yellow-500 p-6'>One Stop For All Solution..</h1>
      <HomeCard/>
      
    </div>
  )
}

export default HomePage
