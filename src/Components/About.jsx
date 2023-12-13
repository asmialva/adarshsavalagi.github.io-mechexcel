import React from 'react'
import backgroundImage from '../assets/about.jpg';
import aboutImage from '../assets/about1.jpg';
export default function About() {


  const points = [
    {
      title: 'Experience',
      description: 'With years of experience in the field, we bring a wealth of knowledge to every project.',
    },
    {
      title: 'Quality Assurance',
      description: 'We adhere to strict quality standards and employ rigorous inspection processes.'
    },
    {
      title: 'Innovation',
      description: 'We embrace the latest technological advancements to provide efficient and cost-effective solutions.'
    },
    {
      title: 'Safety First',
      description: 'Safety is our top priority, and we maintain the highest safety standards in all our operations.'
    },
    {
      title: 'Client-Centric Approach',
      description: 'We work closely with our clients to tailor our services to their specific needs.'
    },
  ];



  const containerStyle = {
    height: '60vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center ',
    position: 'relative',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <>

      <div style={containerStyle}>
        <div style={overlayStyle}></div>
        <div style={textStyle}>
          <p className='text-4xl md:text-6xl'>ABOUT MECHEXCEL</p>
        </div>
      </div>


      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white rounded-lg shadow-md p-6">
              <p className='text-2xl font-bold'>
                About MECHEXCEL
              </p>
              <p className="mt-4 text-md text-gray-600">
                MECHEXCEL (I) LLP is a dynamic and forward-thinking company operating at the forefront of the industrial services sector. Established in September 2023, we are headquartered in Uran, Raigad District, Maharashtra, and have quickly emerged as a trusted partner in the Oil and Gas, Petroleum, Petrochemical, and Steel industries.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <p className='text-2xl font-bold'>Our Expertise</p>
              <p className="mt-4 text-md text-gray-600">
                Our core expertise lies in Maintenance & Inspection (M&I) and Construction Projects within the Oil and Gas sector. With a team of seasoned professionals and cutting-edge technology, we provide comprehensive solutions that ensure the smooth operation and longevity of vital industrial assets. We understand the critical nature of these industries and are committed to delivering excellence.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <p className='text-2xl font-bold'>Our Commitment</p>
              <p className="mt-4 text-md text-gray-600">
                At MECHEXCEL (I) LLP, we are dedicated to exceeding the expectations of our clients. We believe in the principles of safety, quality, and innovation. Our commitment to environmental sustainability, health, and safety standards is unwavering.
              </p>
            </div>

          </div>
        </div>
      </div>


      <div className='w-9/12 md:w-2/3 mx-auto mb-9'>
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
          <p className='font-bold my-4 text-2xl'>Why Choose MECHEXCEL (I) LLP?</p>
          </h3>
        </div>

        {points.map((point, index) => (
        <div className="flex gap-x-3" key={index}>
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>
          </div>
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 text-lg">
            {point.title}
            </h3>
            <p className="mt-1 text-md text-gray-600 dark:text-gray-400">
            {point.description}
            </p>
          </div>
        </div>

))}
      </div>





      
<div className='w-4/5 md:w-9/12 mx-auto'>
      <CustomBorderedCard title={`Join Us in Shaping the Future`} content={`MECHEXCEL (I) LLP is not just a company; it's a vision for a better industrial future. We invite you to explore our website and learn more about how we can collaborate to achieve your goals. Your success is our success, and together, we can drive progress in the industries we serve.`} />
      <p className='sm mx-auto  my-5'>Thank you for considering MECHEXCEL (I) LLP as your trusted industrial services partner. We look forward to building lasting relationships and contributing to the success of your projects.</p>

</div>






     
    </>
  );
};





const CustomBorderedCard = ({ title, content }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 ">
      {title && <h2 className="text-xl font-bold mb-3">{title}</h2>}
      <div className="text-md text-gray-600 mx-auto ">
        {content}
      </div>
    </div>
  );
};
