import React from 'react'

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services');
  console.log(
    nextSection
  );
  if (nextSection) {
    const sectionTop = nextSection.getBoundingClientRect().top;
    window.scrollBy({ 
      top: sectionTop - 250,
      behavior: 'smooth' 
    });
  }
  };
  return (
    <>
      <section className="bg-white flex justify-center items-center h-screen" id='home'>
        <div className="text-center">
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">MechExcel: Shaping Tomorrow's Industrial Landscape.</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Empowering Innovations, Engineering Excellence - Welcome to MechExcel, where mechanical prowess meets transformative solutions, driving the future of engineering marvels.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 items-center text-center content-center">
            <a href="#" onClick={scrollToNextSection} className=" justify-center items-center py-3 px-5 text-base font-medium text-center text-black ">
            <AnimatedSVG/>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function AnimatedSVG() {
  const svgStyle = {
    animation: 'moveUpDown 1s ease-in-out infinite alternate',
  };

  const keyframes = `
    @keyframes moveUpDown {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(15px); 
      }
    }
  `;

  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={svgStyle}
    >
      <style>{keyframes}</style>
      <path
        d="M6 12.5L11.3243 17.3806C11.6451 17.6747 11.8055 17.8217 12 17.8217C12.1945 17.8217 12.3549 17.6747 12.6757 17.3806L18 12.5"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L11.3243 10.8806C11.6451 11.1747 11.8055 11.3217 12 11.3217C12.1945 11.3217 12.3549 11.1747 12.6757 10.8806L18 6"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
