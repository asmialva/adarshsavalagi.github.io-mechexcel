import React from 'react'
import backgroundImage from '../../assets/about/about.jpg';

export default function Pigging() {
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
      <div className='mx-8 md:mx-32 my-20'>
        <h1 className='font-bold text-4xl '>Mechanical Decoking / Pigging</h1>
        <div className=''>
          <p className='md:my-5 my-2 text-justify'>
          Mechanical Decoking / Pigging is Globally Recognized as the Optimal Method for Removing Coke Scaling inside Fired Heater Tubes.</p>



          <h3 className='font-semibold text-xl'>Benefits:</h3>

          
<li className='ml-3 my-1'>Enhances Efficiency: Drives improved operational efficiency.</li>
<li className='ml-3 my-1'>Boosts Productivity: Increases overall productivity levels.</li>
<li className='ml-3 my-1'>Reduces Maintenance Costs: Cuts down on maintenance expenses.</li>
<li className='ml-3 my-1'>Enhances Reliability: Promotes greater system reliability.</li>
<li className='ml-3 my-1'>Minimizes Risks: Reduces potential operational risks.</li>
<li className='ml-3 my-1'>Improves Safety & Quality: Elevates safety standards and product quality.</li>

          <p className='md:my-5 my-2 text-justify'>
          MECHEXCEL: Pioneering 100% Indian Decoking / Pigging Services for Heaters</p>
          <p className='md:my-5 my-2 text-justify'>
          MECHEXCEL proudly stands as the first Indian company to offer comprehensive Decoking / Pigging Services for Heaters.</p>
          <p className='md:my-5 my-2 text-justify'>
          Our pigging and decoking system is not only completely safe and self-contained but also adept at cleaning heaters with radius bends, plug headers, and box headers.</p>
          <p className='md:my-5 my-2 text-justify'>
          With the capability to track pigs and swiftly identify problem areas, our system ensures your heaters run at peak efficiency.</p>
          <p className='md:my-5 my-2 text-justify'>
          While we clean your heater, you can concurrently perform other maintenance tasks, saving both time and money.</p>




          <div className=' flex-col flex md:flex-row my-6 md:w-11/12'>

            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-2 md:mx-2' />
            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-2 md:mx-2' />
            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-2 md:mx-2' />


          
          </div>
              <p className=''>Our trailer-mounted double pumper decoking unit has the capacity to handle two jobs simultaneously. For instance, it can clean one heater with two passes simultaneously, allowing for bidirectional cleaning. Moreover, it achieves this without the use of chemicals, without causing damage to heater tubes, and with minimal environmental impact</p>
        </div>

      </div>
    </>
  )
}
