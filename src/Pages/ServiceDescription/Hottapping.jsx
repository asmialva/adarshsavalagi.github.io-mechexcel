import React from 'react'
import backgroundImage from '../../assets/about/about.jpg';

export default function Hottapping() {
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
        <h1 className='font-bold text-4xl '>Hot Tapping</h1>
        <div className=''>
          <p className='md:my-12 my-3 text-justify'>
            Hot tapping/Pressure tapping, is the method of making a connection to existing piping or pressure vessels without the interrupting or emptying of that section of pipe or vessel. This means that a pipe or tank can continue to be in operation whilst maintenance or modifications are being done to it. The process is also used to drain off pressurized casing fluids and add test points or various sensors such as temperature and pressure. Hot taps can range from a ½ inch hole designed for something as simple as quality control testing, up to a 48-inch tap for the installation of a variety of ports, valves, t-sections or other pipes.
          </p>
          <div className=' flex-col flex md:flex-row mt-3 md:w-11/12'>

            <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3' />


            <div className="relative overflow-x-auto md:mx-3 my-4 md:w-3/4">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100  dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-s-lg">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-e-lg">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Hot Tapping Range
                    </th>
                    <td className="px-6 py-4">
                      ½” to 96”
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Pressure Rating
                    </th>

                    <td className="px-6 py-4">
                      150# to 1500#
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Temperature Range
                    </th>
                    <td className="px-6 py-4">
                      -25°C to 400°C
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Line Material
                    </th>
                    <td className="px-6 py-4">
                      Carbon steel, Mild steel, Stainless steel, Alloy steels,
                      Pipes with internal reinforcements, cement pipes,  etc.

                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
