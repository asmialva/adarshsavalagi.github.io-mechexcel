import React from 'react'
import backgroundImage from '../../assets/about/about.jpg';

export default function VaccumTanker() {
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
        <h1 className='font-bold text-4xl '>Vacuum Tanker</h1>
        <div className=''>
          <p className='md:my-8 my-3 text-justify'>
            Hot tapping/Pressure tapping, is the method of making a connection to existing piping or pressure vessels without the interrupting or emptying of that section of pipe or vessel. This means that a pipe or tank can continue to be in operation whilst maintenance or modifications are being done to it. The process is also used to drain off pressurized casing fluids and add test points or various sensors such as temperature and pressure. Hot taps can range from a ½ inch hole designed for something as simple as quality control testing, up to a 48-inch tap for the installation of a variety of ports, valves, t-sections or other pipes.
          </p>
          <div className=' flex-col flex mx-auto md:flex-row mt-3 md:w-11/12'>

            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-1 mx-1' />
            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-1 mx-1' />
            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-1 mx-1' />


          </div>
        </div>
        <h3 className='font-semibold text-xl'>About the Super Sucker Vacuum Truck:</h3>


        <li className='ml-3 my-1'>The Super Sucker Vacuum Truck is a versatile mobile vacuum unit designed for both dry and wet operations. It excels in handling liquid and semi-solid substances.</li>
        <li className='ml-3 my-1'>With an impressive suction power of 3000 m3/hr of dry air, this unit gets the job done efficiently.</li>
        <li className='ml-3 my-1'>It boasts a suction head range of 80m to 120m, making it highly adaptable to various situations.</li>
        <li className='ml-3 my-1'>Our Vacuum Truck fulfils essential objectives and aids in ensuring compliance with environmental and safety regulations at the plant.</li>


        <h3 className='font-semibold text-xl'>Applications:</h3>


        <li className='ml-3 my-1'>Efficient suction and safe discharge of pyrophoric materials.</li>
        <li className='ml-3 my-1'>Swift and spill-free transfer of waste oil and sludge from the source to ETP pits/lagoons.</li>
        <li className='ml-3 my-1'>During the monsoon season, especially in coastal areas, heavy rains can lead to waterlogging in process units. In such cases, our trucks can rapidly handle emergencies by lifting, shifting, and discharging materials.</li>
        <li className='ml-3 my-1'>Additionally, our trucks can mitigate environmental hazards by swiftly relocating rainwater from open OWS pits and drains to safer locations.</li>


        <h3 className='font-semibold text-xl'>Safety Features:</h3>


        <li className='ml-3 my-1'>The truck features a corrosion-resistant Stainless Steel tank capable of handling corrosive materials.</li>
        <li className='ml-3 my-1'>Unlike Conventional Trucks/Gully Suckers with manually operated rear doors, our Vacuum Truck's contemporary rear doors are hydraulically operated. This ensures quick and safe opening and closing, eliminating the need for 20-30 minutes of manual labor.</li>
        <li className='ml-3 my-1'>To enhance safety further, the rear discharge Dish end is equipped with a safety lock to mitigate risks in case of hydraulic system failure, hose cut-off, or oil leakage.</li>
        <li className='ml-3 my-1'>Additionally, a safety alarm system is integrated to prevent over-lifting of the tank beyond prescribed limits.</li>
      </div>
    </>
  )
}
