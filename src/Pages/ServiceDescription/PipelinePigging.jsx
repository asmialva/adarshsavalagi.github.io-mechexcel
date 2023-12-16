import React from 'react'
import backgroundImage from '../../assets/about/about.jpg';

export default function PipelinePigging() {
 
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
            <h1 className='font-bold text-4xl '>PIPELINE PIGGING</h1>
            <div className=''>
              <p className='md:my-5 my-2 text-justify'>
              At MECHEXCEL, we specialize in crafting bespoke pigging programs for routine maintenance. We understand that every pipeline is unique, and its history, past pigging programs, and pig types used play crucial roles in determining the ideal approach. A well-planned pigging program is not just a maintenance task; it's a lifeline for your pipeline's longevity.  </p>
              <p className='md:my-5 my-2 text-justify'>
              Our commitment is to provide cleaning solutions that cater to your routine maintenance needs and extend beyond to offer pre-inspection cleaning support. Our comprehensive pigging maintenance service begins with a meticulous study of your pipeline. We delve into system information, flow dynamics, pressures, temperatures, and various other parameters. We analyse pipeline geometry, medium, and the type of debris to be removed, and perform debris analysis while considering your pipeline's unique design. </p>
              <p className='md:my-5 my-2 text-justify'>
              Following this thorough assessment, we develop a tailored cleaning program. This program includes the careful selection of cleaning pigs and a detailed plan for their deployment. Our operational support encompasses pig launching, pig receiving, and real-time pig tracking, along with data collection.</p>
              <p className='md:my-5 my-2 text-justify'>
              We understand the importance of monitoring the cleaning progress and its effectiveness. That's why we're dedicated to crafting a complete pigging solution tailored specifically to your pipeline's needs. For pipelines burdened with heavy debris or those that haven't seen cleaning in years, we specialize in designing progressive pigging programs. These programs ensure pipeline cleanliness, resulting in enhanced throughput and efficiency.</p>
    
              <h3 className='font-semibold text-xl'>Benefits of Our Pipeline Cleaning Solutions:</h3>
    
              
    <li className='ml-3 my-1'>Maximization of Operating Efficiency: Our tailored approach optimizes your pipeline's performance.</li>
    <li className='ml-3 my-1'>Energy Efficiency with Better Flow Management: Achieve energy efficiency through improved flow dynamics.</li>
    <li className='ml-3 my-1'>Extended Life: Prolong your pipeline's lifespan with our comprehensive maintenance solutions.</li>
    <li className='ml-3 my-1'>Corrosion Monitoring and Effective Prevention: We offer proactive corrosion monitoring and preventive measures.</li>
    <li className='ml-3 my-1'>Safety of Assets and People: Prioritize safety for both your assets and personnel.</li>
    
    
    
              <div className=' flex-col flex md:flex-row my-6 md:w-11/12'>
    
                <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-2 md:mx-2' />
                <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-2 md:mx-2' />
                <img src="https://ndtinspect.com/wp-content/uploads/2023/01/Hot-Tapping.jpeg" alt="Hot tapping" className='md:w-1/3 my-2 md:mx-2' />
    
    
              
              </div>
                  <p className=''>Your pipeline's potential is our priority, and we're here to ensure it operates at its best for years to come.</p>
            </div>
    
          </div>
        </>
      )
    }
    
