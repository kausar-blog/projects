import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Presentation() {
  const CardData = [
    {
      Source: 'group-1.png',
      heading: 'Management',
      text: 'Streamline your workflow, manage teams efficiently, and track progress with smart tools designed for productivity.',
    },
    {
      Source: 'group-2.png',
      heading: 'Entertainment',
      text: 'Deliver engaging and interactive experiences that keep your audience connected and entertained.',
    },
    {
      Source: 'group-3.png',
      heading: 'Marketing',
      text: 'Boost your brand visibility with data-driven strategies and powerful marketing automation tools.',
    },
    {
      Source: 'group-4.png',
      heading: 'References',
      text: 'Access trusted resources and insights to support smarter decisions and continuous growth.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start gap-16">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
          {CardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-3 hover:bg-gray-50"
            >
              {/* Icon with gradient circle */}
              <div className="flex justify-center items-center mb-6">
                <div className="bg-linear-to-tr from-indigo-500 to-purple-500 p-6 rounded-full shadow-lg flex justify-center items-center animate-bounce-slow">
                  <img
                    src={card.Source}
                    alt={card.heading}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {card.heading}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              The quickest way to create modern presentations
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Best software platform for running an internet business. We build
              the most powerful and flexible tools for internet commerce.
            </p>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
              Get Started
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          </div>

          {/* Follow Us at bottom */}
          <div className="mt-12 text-center lg:text-left">
            <p className="font-semibold mb-3 text-gray-700">Follow Us</p>
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
