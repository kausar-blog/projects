import React from 'react';
import { Button, Stack } from '@mui/material';

function PresentationCTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-700 via-blue-600 to-indigo-700 py-24 px-6">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Quickest Way to Create <br />
            <span className="text-yellow-300">Awesome Presentations</span>
          </h1>

          <p className="text-blue-100 max-w-xl mx-auto lg:mx-0 text-lg">
            Design stunning slides in minutes with powerful tools and
            beautifully crafted templates that elevate your workflow.
          </p>

          {/* Buttons */}
          <Stack
            spacing={3}
            direction="row"
            className="justify-center lg:justify-start"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: '#1e3a8a',
                padding: '12px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: '#f3f4f6',
                },
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: '#ffffff',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                '&:hover': {
                  borderColor: '#e0e7ff',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="bomb-1.png"
            alt="presentation-illustration"
            className="w-full max-w-lg drop-shadow-2xl animate-bounce-slow"
          />
        </div>
      </div>
    </section>
  );
}

export default PresentationCTA;
