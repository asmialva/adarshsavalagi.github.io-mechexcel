import React, { useState } from 'react'
import backgroundImage from '../assets/about.jpg';
import { ServicePageCategories } from '../data/services'
export default function TempPage() {

  const [state, setState] = useState(0);

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
          <p className='text-4xl md:text-6xl'>OUR SERVICES</p>
        </div>
      </div>


    <div className="flex mx-auto w-11/12  flex-col md:flex-row my-6">
        <div className="md:w-1/4  p-5">
            <h2 className=' text-4xl font-bold'>Category</h2>{ServicePageCategories.map((data,index)=>(
             <CategoryButton  onClick={()=>{setState(index)}} index={index}  selected={state==index} name= {data.title}/>
          ))}
        </div>


        <div className="md:w-3/4 ">

          {ServicePageCategories[state].services.map((data,index)=>(
            <>
            <ServiceCard props={data}/>
            </>
          ))}
        </div>
      </div>




    </>
  )
}




 function CategoryButton(props) {
  return (
    <button key={props.index} onClick={props.onClick} className="btn m-2 w-full bg-white   text-left flex justify-start border-solid"> <span className='text-2xl'>{props.selected?'\u2022':''}</span> {props.name}</button> 
  )}


  
const ServiceCard = (props ) => {
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
      <div key={props.props}
      className="relative p-3 my-2 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg  service-card"
      style={{
        ...cardBaseStyle,
        backgroundImage: `url(${props.props.image})`, // Set the background image dynamically
      }}
    >
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <a href="#" className="block mb-4">
          <h5 className="mb-2 text-2xl font-semibold text-white">{props.props.title}</h5>
        </a>
        <p className="mb-3 text-gray-200 text-justify">{props.props.data} </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          style={buttonStyle}
        >
          Learn More
        </button>
      </div>
    </div>
    );
  };