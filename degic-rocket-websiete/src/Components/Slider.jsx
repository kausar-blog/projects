import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Slider() {
  const slides = [
    {
      id: 1,
      heading: 'Make more time for the work that matters most',
      description: 'Best software platform for running an internet business.',
      image: '/carousel-1.png',
    },
    {
      id: 2,
      heading: 'Collaborate with your team seamlessly',
      description:
        'Work together in real-time and boost your team productivity with smart collaboration tools.',
      image: '/group-2.png',
    },
    {
      id: 3,
      heading: 'Track progress and achieve your goals',
      description:
        'Monitor tasks, measure performance, and stay focused on what truly matters.',
      image: '/group-3.png',
    },
    {
      id: 4,
      heading: 'Automate repetitive tasks easily',
      description:
        'Save time by automating daily operations and focus on growing your business.',
      image: '/group-4.png',
    },
    {
      id: 5,
      heading: 'Secure and scalable cloud solution',
      description:
        'Protect your data with enterprise-level security and scale as your business grows.',
      image: '/group-1.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { heading, description, image } = slides[currentIndex];

  return (
    <>
      <section className="max-w-350 py-24 px-6 md:px-12 mx-auto ">
        <div className="flex flex-col justify-between md:flex-row items-center gap-20">
          {/* left side */}
          <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
            <img className="w-16 mb-4 md:w-24" src="/logo.png" alt="logo" />
            <h1 className="text-2xl md:text-5xl font-bold text-black max-w-md">
              {heading}
            </h1>
            <p className="text-gray-400 max-w-sm text-[20px]">{description}</p>
            <div className="flex items-center space-x-4 mt-4">
              <button
                onClick={prevSlide}
                className="bg-gray-100 p-3 rounded-full hover:bg-red-200 transition"
              >
                <ArrowBackIosIcon fontSize="small" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-100 p-3 rounded-full hover:bg-red-200 transition"
              >
                <ArrowForwardIosIcon fontSize="small" />
              </button>
            </div>
          </div>
          {/* right side */}
          <div className="w-full md:w-1/2 flex justify-center ">
            <img
              className="w-full md:w-[65%] object-cover"
              src={image}
              alt={heading}
            />
          </div>
        </div>
        <div className="overflow-hidden mt-16">
          <div className="flex animate-scroll whitespace-nowrap">
            <img
              className="h-20 w-auto mx-10"
              src="com-logos.png"
              alt="com-logos"
            />
            <img
              className="h-20 w-auto mx-10"
              src="com-logos.png"
              alt="com-logos"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
