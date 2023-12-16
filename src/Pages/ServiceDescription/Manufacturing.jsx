import React from 'react'
import backgroundImage from '../../assets/about/about.jpg';

export default function Manufacturing() {
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
      <div className='mx-10 md:mx-32 my-20'>
        <h1 className='font-bold text-4xl '>FABRICATION WAREHOUSE:</h1>
        <div className=''>
          <p className='md:my-8 my-3 text-justify'>
          We have a well-equipped and spacious indigenous fabrication facility at our head office in Raigad District of Maharashtra where all fabrication activities are carried out by our highly skilled workers.  </p>
          <div className=' flex-col flex mx-auto md:flex-row mt-3 md:w-11/12'>

            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-1 mx-1' />
            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-1 mx-1' />
            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-1 mx-1' />


          </div>
        </div>
        <h3 className='font-semibold text-xl'>We manufacture:</h3>


        <li className='ml-3 my-1'>•	Hot Tap and Line Stop fittings from 2” to 96” with pressure rating from 150# to 1500#.</li>
        <li className='ml-3 my-1'>•	Hot tapping Machines & Accessories from 1/2” to 96” size</li>
        <li className='ml-3 my-1'>•	Line stop Equipment’s & Accessories from 1/2” to 48” Size</li>
        <li className='ml-3 my-1'>•	Leak Repair clamps</li>
      
        
         </div>
    </>
  )
}
