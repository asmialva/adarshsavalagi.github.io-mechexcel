import React from 'react'
import backgroundImage from '../../assets/about/about.jpg';

export default function CrudeOilTankCleaning() {
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
        <h1 className='font-bold text-4xl '>CRUDE OIL TANK CLEANING</h1>
        <div className=''>
          <p className='md:mt-12 my-1 text-justify'>
            We take up cleaning of crude oil tanks of all capacities up to utmost satisfaction level of our esteemed clients. Crude oil tank bottoms are typically high in hydrocarbons, it is a valuable raw material which can be recovered and recycled back to the refining process. When crude
            tanks are cleaned, first, the sludge is removed from tank bottom and simultaneously the oil is recovered from it.

          </p>
          <p className='my-5  text-justify'>To ensure a safe tank cleaning process, an inert gas typically nitrogen is injected into the tank for blanketing. The purpose of inert gas introduction is to reduce the oxygen level below 8% to eliminate the risk of explosion which may cause due to static electric effect and the inert condition is maintained for entire cleaning process.</p>
          <p className='my-5  text-justify'>Desludging is the first process in the cleaning of the tank and this is where most of the oily sludge from the tank is removed. The desluding process may begin only when the oxygen level has fallen below 8% in the tank.</p>
          <p className='my-5  text-justify'>The tank cleaning process consists of an oil wash and if required a final hot water wash. Efficient and especially designed nozzles are installed on the roof of the tank which are used to liquefy the sludge at the bottom of the crude oil tank and thus play a vital role in the cleaning process. The nozzles can be programmed to focus on areas that require more intensive desludging/cleaning. </p>

          <div className=' flex-col flex md:flex-row mt-3 md:w-11/12' >

            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 m-2' />
            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 m-2' />
            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 m-2' />

          </div>
          <h3 className='font-bold text-xl'>The sludge – oil mixture then being pumped out to filtration unit for separation of oil and sludge. There are three tank cleaning methods widely used for crude tank cleaning namely; manual, semi auto and no men entry</h3>
          <ul className='list-disc'>
            <li className='ml-3 my-1 font-semibold'>Industrial Product Tank Cleaning :</li>
            <ul>
              <li>Product tanks demand cleaning of tank internals in shorter frequencies in order to maintain the product quality. MECHEXCEL takes up high pressure water jetting and surface cleaning of product tanks through a mechanized manner in the shortest possible duration. </li>
            </ul>
            <li className='ml-3 my-1'>Processing of Oily Sludge from Sludge Pits and Sludge Lagoons </li>
            <ul>
              <li>Sludge accumulated in lagoons and sludge pits usually consist of oily waste collected in the refinery premises. Disposal of this sludge is a mammoth and complex task for owners. MECHEXCEL takes up mechanical separation of sludge into its basic components such as hydrocarbon, water and solids. Hydrocarbon is returned to the refinery for re-use while water and solids are disposed by the clients in an environmentally friendly manner.</li>
            </ul>

          </ul>
        </div>

      </div>
    </>
  )
}
