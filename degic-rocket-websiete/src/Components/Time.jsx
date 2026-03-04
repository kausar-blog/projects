import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

/* ===============================
   Reusable Feature Section Component
================================= */
const FeatureSection = ({ image, reverse, buttonColor }) => {
  const features = [
    'Many ways to use illustrations in design',
    'Simply explained with clear visual examples',
    'Save time and increase team productivity',
  ];

  return (
    <div
      className={`max-w-7xl mx-auto flex flex-col-reverse ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center gap-16`}
    >
      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img
          className="w-full max-w-xl drop-shadow-2xl"
          src={image}
          alt="feature-img"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-8 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Make More Time for the{' '}
          <span className="text-blue-600">Work That Matters</span>
        </h1>

        <p className="text-gray-500 max-w-lg mx-auto lg:mx-0">
          Boost your productivity and focus on meaningful tasks with smart
          design systems and intuitive workflow management.
        </p>

        {/* Features List */}
        <div className="space-y-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <CheckCircleOutlineIcon className="text-blue-600" />
              <span className="text-gray-700 font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="pt-4 flex justify-center lg:justify-start">
          <button
            className={`group flex items-center gap-2 ${buttonColor} text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300`}
          >
            Get Started
            <ArrowForwardIosIcon
              className="transition-transform duration-300 group-hover:translate-x-1"
              fontSize="small"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===============================
   Main Time Component
================================= */
function Time() {
  const sectionsData = [
    {
      image: 'time-1.png',
      reverse: false,
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      image: 'time-2.png',
      reverse: true,
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
    },
  ];

  return (
    <section className="py-24 bg-linear-to-br from-white to-gray-50 px-6 space-y-24">
      {sectionsData.map((section, index) => (
        <FeatureSection key={index} {...section} />
      ))}
    </section>
  );
}

export default Time;
