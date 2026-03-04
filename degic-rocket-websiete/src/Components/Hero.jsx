import React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Hero() {
  return (
    <>
      <div>
        <section className="max-w-350 mx-auto px-6 lg:px-16 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Simply explained <br className="hidden lg:block" />
              with illustrations
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              There are a lot of different components that will help you create
              the perfect look for your project and make it modern and
              professional.
            </p>

            {/* Button Wrapper */}
            <div className="flex justify-center lg:justify-start w-full">
              <Stack spacing={2} direction="row">
                <Button variant="contained" size="large">
                  Get Started
                </Button>
                <Button variant="outlined" size="large">
                  Learn More
                </Button>
              </Stack>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              className="w-full max-w-md lg:max-w-lg h-auto"
              src="/hero-img.png"
              alt="Hero Illustration"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
