import React from 'react'
import {serviceItem} from '../data/services'
import { Link, useNavigate} from 'react-router-dom';
export default function Services() {


 

    return (
      <section>
        
            <div id='services' className='mx-auto  justify-center align-middle w-11/12 md:w-full ' >
                <h1 className='font-bold text-3xl text-center my-3'>Services</h1>
                <h3 className='text-lg mb-2  text-center '>We Provide a range of services such as...</h3>
                <div className="flex flex-wrap mb-10 md:mx-10 justify-center">

                       <ServiceCard serviceItem={serviceItem} />
                    
                  <Link to='/adarshsavalagi.github.io-mechexcel/service'>  <button className="btn my-4">See more...</button></Link>

                </div></div>
        
      </section>
    )
}

const ServiceCard = ({ serviceItem }) => {
  const history=useNavigate();
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                <button onClick={()=>{history(service.nextPage)}}
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