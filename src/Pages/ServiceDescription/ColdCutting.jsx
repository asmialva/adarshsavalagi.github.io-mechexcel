import React from 'react'

import backgroundImage from '../../assets/about/about.jpg';
export default function ColdCutting() {
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
            <h1 className='font-bold text-4xl '>COLD CUTTING OF PIPES AND VESELS</h1>
            <div className=''>
              <p className='md:my-12 my-3 text-justify'>
              Outer Diameter mounted pipe cutting & beveling machines available at MECHEXCEL are ideal for all types of pipe cutting, beveling and pipeline end preparation operations.  </p>
              <div className='flex-col flex md:flex-row mt-3 md:w-11/12'>
    
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
                        Available Range   
                        </th>
                        <td className="px-6 py-4">
                        3 to 48 inches on most wall thicknesses and material
                        </td>
                      </tr>
                      <tr className="bg-white ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Materials include
                        </th>
    
                        <td className="px-6 py-4">
                        Carbon steel, Alloy Steel, Stainless Steel as well as other material
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
    