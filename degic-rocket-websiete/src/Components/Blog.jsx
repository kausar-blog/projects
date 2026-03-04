import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Blog() {
  const cardData = [
    {
      id: 1,
      ImgSrc: '/blog-1.png',
      title: 'Make Myspace Your Best Designed Space',
      description:
        'A lot of different components that will help you create the perfect look for your project.',
      buttonLabel: 'Design',
    },
    {
      id: 2,
      ImgSrc: '/blog-2.png',
      title: 'My Company Culture Has Changed Today',
      description:
        'A lot of different components that will help you create the perfect look for your project.',
      buttonLabel: '3D Illustrations',
    },
    {
      id: 3,
      ImgSrc: '/blog-3.png',
      title: 'Professionals in Craft! All Products Were Super Great',
      description:
        'A lot of different components that will help you create the perfect look for your project.',
      buttonLabel: 'Development',
    },
  ];

  return (
    <section className="py-24 bg-linear-to-br from-white to-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Get More From Our <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-gray-500 mt-4 text-lg">
              There are a lot of different components that will help you create
              the perfect look for your project.
            </p>
          </div>

          <div>
            <button className="group flex items-center gap-2 text-blue-600 font-semibold text-lg">
              Explore All
              <ArrowForwardIosIcon
                className="transition-transform duration-300 group-hover:translate-x-1"
                fontSize="small"
              />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map(card => (
            <div
              key={card.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.ImgSrc}
                  alt={card.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-5">
                {/* Badge */}
                <span className="inline-block text-xs font-semibold tracking-wide uppercase bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                  {card.buttonLabel}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Read More */}
                <button className="group flex items-center gap-2 text-blue-600 font-semibold">
                  Read More
                  <ArrowForwardIosIcon
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    fontSize="small"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
