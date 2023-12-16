import React from 'react'
import backgroundImage from '../../assets/about/about.jpg';

export default function LineStopping() {
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
                <h1 className='font-bold text-4xl '>LINE STOPPING/FLOW STOPPING</h1>
                <div className=''>
                    <p className='md:mt-12 my-1 text-justify'>
                        Line stopping or line plugging is a means of isolating a piping system to provide a shut off where none exists. This process serves as a control, or temporary valve, that can be removed after permanent alterations or valve replacements/additions have been made. With a hot tap previously made on a line, a line stopper is attached to a temporary valve, and the valve is opened. The line stopper is hydraulically or mechanically pushed into the line to seal the pipe. The main is supported by the line stop sleeve. After performing the necessary service, the stop is removed, and a blind flange is installed on the sleeve. </p>
                    <p className='my-5  text-justify'>We at MECHEXCEL offer a diversified selection of line stop methods in the world including our unique CAM-LOR plug interlock system. We are committed to provide the highest level of services to our clients who require any type of pipeline modifications. </p>
                    <h3 className='font-semibold text-xl'>We offer line stopping services for:</h3>
                    <li className='ml-3 my-1'>Defect pipe spool replacement/ Replacement of Pipelines</li>
                    <li className='ml-3 my-1'>Rerouting of pipelines.</li>
                    <li className='ml-3 my-1'>Valve Installation/Valve replacement</li>
                    <div className=' flex-col flex md:flex-row mt-3 md:w-11/12' >

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
                                            Line Stop Range
                                        </th>
                                        <td className="px-6 py-4">
                                            2” to 56”
                                        </td>
                                    </tr>
                                    <tr className="bg-white ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Pressure Rating
                                        </th>

                                        <td className="px-6 py-4">
                                            150# to 900#
                                        </td>
                                    </tr>
                                    <tr className="bg-white ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Temperature Range
                                        </th>
                                        <td className="px-6 py-4">
                                            -50°C to 150°C
                                        </td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>

                    </div>
                    <h1 className='font-bold text-2xl my-4'>LOR SURELOCK:</h1>
                    <p className='text-justify my-1'>LOR SURELOCK is an advanced technology of internal LOR flange blinding compared to conventional design of LOR completion plug.</p>
                    <p className='text-justify my-2'>LOR SURELOCK plugs are retained in the line stop fittings by means of an interlock system provided by the leaves of the LOR SURELOCK plug. This further minimizes leak paths as the leaves of Plugs restricts side openings in the flange. Installation is easy and safe and consumes less time when it comes to setting of the LOR SURELOCK plug.</p>
                    <p className='text-justify my-1'>This also ensures 100% perfect re-alignment of pipe coupons in its original position. Since the LOR SURELOCK plugs have flange locking mechanism, hence there is no chance of plug changing its original set position.</p>
                </div>

            </div>
        </>
    )
}
