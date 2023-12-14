import React from 'react'

import backgroundImage from '../assets/about.jpg';



import pipeline from '../assets/pipeline.jpg';
import industry from '../assets/industrial.jpg'
import manufacture from '../assets/manufacture.jpg'
export default function Service() {


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
    
      const serviceItem = [
        { title: 'Hot Tapping',image:pipeline , data: 'Hot tapping, or pressure tapping, is a non-disruptive method connecting to existing piping or vessels without halting operations. It facilitates maintenance, modifications, and sensor installation without interrupting functionality. Our proven expertise spans various sizes and pressures, emphasizing safety with specialized procedures and well-stocked equipment inventory.' },
        { title: 'Line Stopping',image:industry, data: 'Line stopping, a pivotal isolation method, creates a shut-off in pipelines without existing valves. This temporary control facilitates alterations or valve replacements. Using a hot tap, a stopper attaches to a temporary valve, sealing the pipe hydraulically or mechanically. MECHEXCEL offers diverse line stop techniques, including the innovative CAM-LOR plug interlock system, prioritizing top-notch pipeline modification services.' },
        { title: 'Cold Cutting',image:manufacture, data: 'MECHEXCEL provides a range of pipe operations with precision exterior diameter mounted pipe cutting and beveling machines. They accommodate several wall thicknesses and materials, including carbon steel, alloy steel, stainless steel, and more, with a range that extends from 3 to 48 inches. Perfect for needs including thorough pipeline end preparation.' },
        { title: 'Pigging',image:industry, data: 'MECHEXCEL tailors bespoke pigging programs for pipeline maintenance, leveraging unique history and pigging data. Their comprehensive approach includes meticulous pipeline assessment, custom cleaning plans, pig selection, and real-time tracking. Specializing in progressive programs, they ensure enhanced pipeline cleanliness, leading to improved efficiency and throughput.' },
        { title: 'Catalyst Handling',image:manufacture, data: 'MECHEXCEL excels with highly trained staff and efficient equipment for catalyst handling in varied industries. Their Zero Harm initiative emphasizes dust control, employing pre-planning and innovative systems to eliminate emissions. They offer cost-effective reactor maintenance, minimizing downtime, reducing nitrogen costs, and ensuring swift emergency responses for cost efficiency.' },
        { title: 'Crude Oil Tank Cleaning',image:industry, data: 'Our expertise extends to cleaning crude oil tanks of various capacities, ensuring client satisfaction. Utilizing inert gas, like nitrogen, we reduce oxygen levels for safety during desludging, crucial for removing oily sludge. Tailored nozzles aid in liquefying and cleaning, with methods including manual, semi-auto, and no-entry. Efficiently recovering valuable oil from tank bottoms completes our comprehensive process.' },
        { title: 'Mechanical Decoking',image:manufacture, data: 'Our proficiency includes cleaning crude oil tanks, guaranteeing client contentment. Employing inert gases for safety, we desludge effectively, removing oily residue. Custom nozzles facilitate liquefaction and cleaning, with methods ranging from manual to no-entry. Efficient recovery of valuable oil from tank bottoms culminates our meticulous process.' },
        { title: 'Vaccum Tankers',image:manufacture, data: 'Our expertise lies in cleaning crude oil tanks, ensuring client satisfaction. With inert gases ensuring safety, our effective desludging eliminates oily residue. Tailored nozzles aid liquefaction and cleaning, offering methods from manual to no-entry. Our meticulous process efficiently recovers valuable oil from tank bottoms, culminating in comprehensive service for our clients\' needs.' },
        { title: 'Manufacturing',image:industry, data: 'Our expertise in crude oil tank cleaning guarantees client satisfaction. Utilizing inert gases for safety, our effective desludging process eliminates oily residue. Tailored nozzles aid in liquefaction and cleaning, providing methods from manual to no-entry. We efficiently recover valuable oil from tank bottoms, culminating in a comprehensive service for our clients\' specific requirements.' },
    ];


    return (
        <>
              <div style={containerStyle}>
        <div style={overlayStyle}></div>
        <div style={textStyle}>
          <p className='text-4xl md:text-6xl'>OUR SERVICES</p>
        </div>
      </div>




      <div  className='mx-auto  justify-center align-middle w-11/12 md:w-full ' >
      <div className="flex flex-wrap mb-10 md:mx-10 justify-center">
      <ServiceCard serviceItem={serviceItem} />


      </div></div>
        </>
    )
}

const ServiceCard = ({ serviceItem }) => {
    const cardBaseStyle = {
        position: 'relative',
    overflow: 'hidden',
    color: 'white',
    backgroundPosition: 'center',backgroundSize: '90%',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
      };
    
      const overlayStyle = {
        content: '',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none', // Allow mouse events to pass through the overlay
      };
    
      const contentStyle = {
        position: 'relative',
        zIndex: 1, // Ensure the content is above the overlay
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '20px', // Adjust padding as needed
      };
    
      const buttonStyle = {
        alignSelf: 'flex-end',
      };
    
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
          {serviceItem.map((service, index) => (
            <div
              className="relative p-3 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg dark:border-gray-700 service-card"
              key={index}
              id={`servicecard${index}`}
              style={{
                ...cardBaseStyle,
                backgroundImage: `url(${service.image})`, // Set the background image dynamically
              }}
            >
              <div style={overlayStyle}></div>
              <div style={contentStyle}>
                <a href="#" className="block mb-4">
                  <h5 className="mb-2 text-2xl font-semibold text-white">{service.title}</h5>
                </a>
                <p className="mb-3 text-gray-200 text-justify">{service.data}</p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
                  style={buttonStyle}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    };