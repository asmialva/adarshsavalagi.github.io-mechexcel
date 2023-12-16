import React, { useState } from 'react'
import backgroundImage from '../../assets/about/about.jpg';

export default function CatalystHandling() {
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
          <h2 className=' text-4xl font-bold'>Category</h2>
          <button onClick={() => setState(0)} className="btn m-2 w-full bg-white text-xs text-left flex justify-start border-solid"> <span className='text-xl'>{state == 0 ? '\u2022' : ''}</span>  CATALYST HANDLING SOLUTIONS</button>
          <button onClick={() => setState(1)} className="btn m-2 w-full bg-white text-xs text-left flex justify-start border-solid uppercase"> <span className='text-xl'>{state == 1 ? '\u2022' : ''}</span>Integrated Mechanical Solutions</button>

        </div>


        {state == 1 ? <div className="md:w-3/4 m-3">
          <h2 className='font-semibold my-2 text-xl'>Specialized Mechanical Technicians for Catalyst Reactor Maintenance</h2>
          <p className=''>Catalyst Handling Resources has specialized mechanical technicians, working within the catalyst handling team, to provide catalyst reactor maintenance. This ensures a truly integrated blind-to-blind approach to our catalyst projects.</p>
          <p className=''>MECHEXCEL welders and boilermakers are specially-trained to complete vessel refurbishment and tubular reformer maintenance for any catalyst handling or acid plant project. We hold R-stamp certification.</p>
          <h2 className='font-semibold my-2 text-xl'>Mechanical Tools</h2>
          <p className=''>MECHEXCEL has fully stocked mechanical tool modules, either on trailers or containerized. With these tool modules on site during catalyst and mechanical projects, we ensure our project teams are prepared for the expected, and many unexpected, situations to control costs by reducing down time.</p>
          <p className=''>MECHEXCEL has torqueing and tensioning tools and expert technicians available for any flange and bolt sizes.</p>
        </div>
          : <div className="md:w-3/4 m-3" >
            <p className='my-1'>Our people are among the best trained and experienced in the industry. Our equipment is designed and built for efficient transport, set up, catalyst loading and unloading, removal and reinstallation.</p>
            <p className='my-1'>MECHEXCEL has experience in a wide range of reactors in oil refining, gas processing, petrochemical, chemical and air separation plants.</p>
            <h2 className='font-semibold my-2 text-xl'>Dust Control</h2>
            <p className='my-1'>Under MECHEXCEL Zero Harm deliverables, we keep a strong focus on dust control.</p>
            <p className='my-1'>Dust is created during production, transport, storage and handling of catalyst and in various stages of catalyst unloading, transferring, reloading, screening and packaging.</p>
            <p className='my-1'>Through pre-planning, attrition prevention, and use of in-house designed dust collection systems at various point in the process, MECHEXCEL is able to eliminate dust emission.</p>
            <h2 className='font-semibold my-2 text-xl'>Cost Control</h2>
            <p className='my-1 '>Cost control is important and MECHEXCEL will deliver the most effective cost solution to catalyst handling projects. We achieve this through:</p>
            <li className='ml-4'>Offering a one-stop solution to reactor maintenance including, mechanical (blind to blind), internal modifications (MECHEXCEL holds R-stamp certification), tray installations, process and logistical services</li>
            <li className='ml-4'>Reducing cost of downtime due to experienced, solution driven project management able to work through challenges quickly and in consultation with the client</li>
            <li className='ml-4'>Reducing the cost of Nitrogen</li>
            <li className='ml-4'>Fast response to emergency shut-downs</li>

            <h2 className='font-bold my-2 text-2xl'>1. Catalyst Unloading</h2>
            <p className='my-1'>Catalyst Handling Resources has a range of options for the unloading reactors, vessels, and columns. The majority of our equipment is proprietary and we constantly review our equipment to incorporate best-practice procedures and methods.
              We offer complete “blind to blind” services for reactors, vessels, and columns from one integrated team. MECHEXCEL can blind and open vessels, complete internal repairs and close and de-blind vessels.
            </p>
            <h2 className='font-bold my-2 text-2xl'>Gravity Unloading and Dust Control</h2>
            <p className='my-1 '>MECHEXCEL material handling equipment can collect, transport, and transfer reactor catalyst from the dump nozzle to any size container requested. Our external dust collectors recover air born particulate created during the material transfer phase of collection.</p>
            <p className='my-1 '>In areas where access is difficult or for unloading horizontal dump nozzles we have enclosed conveyors and screw conveyors that can assist with the removal of catalyst from the most difficult of locations.</p>
            <h2 className='font-semibold my-2 text-xl'>Vacuum Method</h2>
            <p className='my-1 '>Catalyst unloading is typically accomplished by vacuuming from the entry manway, dumping from the unloading nozzle or flange at the base of the reactor, or a combination of both. Unloading using the vacuum method is normally required under the following circumstances: removal of top support and upper zone catalyst only, known as a reactor skim:</p>
            <li className='ml-4'>When gravity unloading is not an option</li>
            <li className='ml-4'>When bed rotation or separation of different catalyst types is desirable</li>
            <li className='ml-4'>Where sampling of catalyst at different zones is needed for evaluation</li>
            <li className='ml-4'>For total recovery of precious metals or hazardous materials</li>
            <li className='ml-4'>When space, access, or the reactor design dictates</li>
            <li className='ml-4'>To retain support for reuse, it may be more economical to skim and classify the support rather than screen and classify the entire charge</li>

            <p className='my-1 '>MECHEXCEL has designed and fabricated its catalyst handling equipment to the specific criteria required for proper catalyst handling. High capacity vacuum blowers, cyclone separators and Continuous Discharge hoppers enable catalyst removal at high rates; with little or no damage to catalyst particles. We accomplish vacuum unloading in atmospheric or inert conditions.</p>
            <p className='my-1 '>A major consideration when vacuuming an inert purged reactor is the conservation of Nitrogen and maintenance of the inert atmosphere. The re-circulation and cooling system used by Catalyst Handling assures both the optimum use of the Nitrogen and the maintenance of safe levels of Nitrogen to work within.</p>
            <h2 className='font-semibold my-2 text-xl'>Inert Entry</h2>
            <p className='my-1 '>Should Immediately Dangerous to Life or Health (IDLH) entries or rescue services be required, we are prepared.</p>
            <p className='my-1 '>Catalyst handling Resources maintains the trained personnel, procedures, equipment, expertise, and most importantly, the experience necessary to ensure the safe completion of work or the provision of safety teams for stand by rescue services.</p>
            <h2 className='font-semibold my-2 text-xl'>Life Support System</h2>
            <p className='my-1 '>The MECHEXCEL Life Support System is fully NIOSH, OSHA and CE accredited and consists of multiple air supplies that feed the lock on helmets to ensure a constant supply of air to technicians. The system also incorporates hard line communication, an egress bottle, a full body harness, and a fall arrest system. Video cameras are used to monitor all aspects of the inert entry operation Up to 4 helmet cameras can be viewed at any time and an additional stand-alone camera can also be connected to the system. Full recordings can be made of the work completed for both quality assurance purposes and as a record of repairs.</p>
            <p className='my-1 '>Our life support equipment is trailerized and also modular to provide optimal set-up location.<br />
              All entries into confined spaces require continuous gas monitoring, an A-Frame with emergency rescue hoist, and first aid equipment on hand. Trailer-mounted. Modular. Mobility and speed.
            </p>
            <h2 className='font-semibold my-2 text-xl'>Water-Flood or Chemical Fixation</h2>
            <p className='my-1 '>Catalyst handling Resources has specifically developed procedures for introducing water or chemicals into the reactor wet unloading. Catalyst Handling Resources has the technology necessary to flood and dump catalyst, and dewater the spent material as well. Specific procedures for capturing liquid and preventing spills during transport are developed on a case by case basis.</p>






            <h2 className='font-bold my-2 text-2xl'>2. Catalyst Screening, Packaging and Storage</h2>
            <p className='my-1 '>Thermal swings, erosion, and reactor operating pressures on catalyst can cause particle chips and fines. Metal and other debris from the feed material of processes can also make its way into the catalyst bed. These smaller particles gather during the unit’s operation and increase the operating pressure required from the inlet feed compressor. These particles may also divert or channel the reactor feed through the catalyst bed.</p>
            <h2 className='font-semibold my-2 text-xl'>One-Pass: Reduce Breaking of Catalysts</h2>
            <p className='my-1 '>MECHEXCEL has designed systems specifically to vibrate gently and/or air-wash the catalyst. The equipment can separate four different material sizes in a single pass. <br />
              The screening of catalyst can be done in-line during vacuum unloading or as a separate step. We utilize screening units up to 72″ diameter.
            </p>
            <h2 className='font-semibold my-2 text-xl'>Catalyst Packaging</h2>
            <p className='my-1 '>MECHEXCEL has the ability to package catalyst in any way the client wants. MECHEXCEL has partnerships with Packgen as an alternative to steel bins and Flow bins, when steel bins are required. MECHEXCEL can incorporate the supply of drums, bags and steel bins into project costing.</p>
            <h2 className='font-semibold my-2 text-xl'>Catalyst Blending and Storage</h2>
            <p className='my-1 '>Catalyst blending and storage capabilities are located in warehouses in Houston Texas. We offer a variety of catalyst blending options. MECHEXCEL can also offer storage facilities in other locations, please contact us if you require catalyst storage and logistical support, or to discuss other options that meet your unique needs.</p>




            <h2 className='font-bold my-2 text-2xl'>3. Catalyst Loading</h2>
            <p className='my-1 '>By utilizing a specially-trained workforce and purpose-built equipment, Catalyst handling Resources can execute catalyst projects efficiently and safely, with minimal catalyst attrition and dust elimination control systems. <br />
              At Catalyst Handling we pride ourselves on being able to load any reactor, vessel, or column, on any site. Our equipment is also built to be modular; allowing for ease of transport and set up, yet still creating a smaller onsite presence or “footprint” than traditional catalyst equipment.
            </p>
            <h2 className='font-semibold my-2 text-xl'>Sock Loading Method</h2>
            <p className='my-1 '>Sock Loading involves placing the catalyst into a hopper on the top of the reactor manway and discharging it through a canvas or rubber “Sock”. One end of the Sock is attached to the Loading Hopper discharging pipe.</p>
            <h2 className='font-semibold my-2 text-xl'>Dense Loading Method</h2>
            <p className='my-1 '>“Dense Loading” is achieved by a mechanical device that ensures a uniform distribution of catalyst throughout the entire diameter of the reactor, and better total bed density as the catalyst is being loaded. A Dense Loading system can increase the loading density by as much as 10 – 20 percent; depending on the type and shape of catalyst that is being loaded. Dense Loading almost always improves the liquid or gas flow, eliminates catalytic bed settling, and allows for a longer run cycle between catalyst replacements. <br />
              MECHEXCEL has various dense loading methodologies available.
            </p>
            <h2 className='font-semibold my-2 text-xl'>Specialized Reformer Loading</h2>
            <p className='my-1 '>MECHEXCEL utilizes Unidense™ technology for the loading of primary reformers. This technology allows consistent loading of catalyst into each tube, ensuring that all pressure drops (dP) are within the pre-determined range. Both Unidense™ and Uniloading™ services are available. <br />
              The loading of Tubular Reformers and all associated mechanical works is provided by our expert teams. Upon completion of a project, all rem <br />
              oved catalyst is packaged in UN approved containers ready for shipment or disposal as required.
            </p>
            <h2 className='font-semibold my-2 text-xl'>Dense Phase Loading</h2>
            <p className='my-1 '>Catalyst Handling has been using Dense Phase Loading equipment for over 20 years, and have loaded a variety of reactors without requiring an onsite crane. This process is particularly effective for loading horizontal vessels, Sulfuric Acid Converters, or in situations where high winds and inclement weather are likely to occur.
              <br /> Please inquire here if dense phase loading is a suitable solution for your catalyst loading project.</p>




            <h2 className='font-bold my-2 text-2xl'>4. Shutdown and Turnaround</h2>
            <p className='my-1 '>MECHEXCEL combines purpose-built equipment and highly-skilled, fully-utilized teams. This allows us to deliver a wide range of services, from project planning and estimating, through safety and quality planning, and ultimately the execution of the work, ensuring a rapid turnaround with minimum downtime for our clients.</p>
            <h2 className='font-semibold my-2 text-xl'>Planning and Management</h2>
            <p className='my-1 '>MECHEXCEL has the ability to put our experts on site months in advance of a shutdown; planning, organizing, and managing our people and subcontractors from start to finish.</p>
            <p className='my-1 '>Combining our holistic approach to managing shutdowns with our multi-skilled workforce means we are able to provide a ‘blind to blind’ service; completing the entire project from planning, through to the final stages before the plant is reactivated.</p>
            <p className='my-1 '>By providing or managing all parties, MECHEXCEL operates rapidly, adapts to changing circumstances and requirements faster, and still be one of the safest companies in the industry today.</p>
            <h2 className='font-semibold my-2 text-xl'>Cost Effectiveness</h2>
            <p className='my-1 '>MECHEXCEL can become involved at any stage from planning though execution of a turnaround.  Our unrivalled ability to offer a ‘blind to blind’ service means that we provide input at every stage of the turnaround, ultimately helping our client to diminish cost, time, and organizational barriers.</p>
            <p className='my-1 '>We work closely with the client from beginning to end, placing a keen focus on the debrieﬁng stage of a turnaround, and identifying further improvements, cost savings, and best practices.</p>


          </div>}



      </div>







    </>
  )
}
