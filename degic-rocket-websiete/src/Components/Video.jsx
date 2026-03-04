import React from 'react';

function Video() {
  return (
    <>
      <section className="bg-gray-100 py-20 px-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Use Illustrations in UI Design
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Learn how to effectively use illustrations in modern UI design to
            enhance user experience and create visually engaging interfaces.
          </p>

          {/* Responsive Video */}
          <div
            className="relative w-full overflow-hidden rounded-3xl shadow-2xl"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/PFUBrYh_0Aw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video;
