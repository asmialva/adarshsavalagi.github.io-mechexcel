import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setByAmount } from '../reducers/cartReducer'
export default function Contact() {
    const count = useSelector((state) => state.State.value)
    const dispatch = useDispatch();




    const [visible, setVisible] = useState([]);
    useEffect(() => {
        const handleScroll = () => {
            const cardElements = document.querySelectorAll('.contact-items');
            const viewportHeight = window.innerHeight;
            const threshold = viewportHeight * 0.8;
            const newVisibleCards = Array.from(cardElements).map((cardElement) => {
                
                const cardTop = cardElement.getBoundingClientRect().top;
                
                return cardTop < threshold;
            });
            setVisible(newVisibleCards);
        };
        if (visible[0]) {
            dispatch(setByAmount(4));
        }else{
            dispatch(setByAmount(1));

        }
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });
  return (
    <>
    <hr />
            <div className='container mt-5  justify-center mx-auto' id='contact'>
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className='font-bold text-3xl text-center mb-3'>Contact Us</h1>
                <h3 className='text-lg mb-2  text-center'>Reach our customer service department.</h3>
                </div>
                <div className='grid md:grid-cols-2 text-gray-600 body-font md:m-24'>
                    {/* cards */}
                    <div className="container px-5  mx-auto">
                        <div className="grid md:grid-rows-2 ">
                            <div className={`p-2 contact-items ${visible[0] ? 'visible' : ''}`}>
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow ">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-800 text-white flex-shrink-0">
                                        <svg className=' my-4' fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="35px" height="20" viewBox="0 0 395.71 395.71"
                        xmlSpace="preserve">
                        <g>
                            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                        </g>
                    </svg>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Our place of business is as stated</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base"> H. No 1094, Mothenagaon<br />
                        Near Ganapati Temple,<br />
                        Uran, Raigarh(MH)<br />
                        Maharashtra - 400702,<br />
                        Bharath<br /></p>

                                    </div>
                                </div>
                            </div>
                            <div className='md:columns-2'>
                                <div className={`p-2 contact-items ${visible[1] ? 'visible' : ''}`}>
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow ">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-800 text-white flex-shrink-0">
                                                <svg fill='white' height="24" viewBox="0 -960 960 960" width="21"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg title-font font-medium">Email our team.</h2>
                                        </div>
                                        <div >
                                            <a href='mailto:info@mechexce.in' className="leading-relaxed text-base">info@mechexce.in</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`p-2 contact-items ${visible[2] ? 'visible' : ''}`}>
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow ">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-800 text-white flex-shrink-0">
                                                <svg fill='white' height="20" viewBox="0 -960 960 960" width="24"><path d="M480-40q-33 0-56.5-23.5T400-120q0-33 23.5-56.5T480-200q33 0 56.5 23.5T560-120q0 33-23.5 56.5T480-40ZM240-760q-33 0-56.5-23.5T160-840q0-33 23.5-56.5T240-920q33 0 56.5 23.5T320-840q0 33-23.5 56.5T240-760Zm0 240q-33 0-56.5-23.5T160-600q0-33 23.5-56.5T240-680q33 0 56.5 23.5T320-600q0 33-23.5 56.5T240-520Zm0 240q-33 0-56.5-23.5T160-360q0-33 23.5-56.5T240-440q33 0 56.5 23.5T320-360q0 33-23.5 56.5T240-280Zm480-480q-33 0-56.5-23.5T640-840q0-33 23.5-56.5T720-920q33 0 56.5 23.5T800-840q0 33-23.5 56.5T720-760ZM480-280q-33 0-56.5-23.5T400-360q0-33 23.5-56.5T480-440q33 0 56.5 23.5T560-360q0 33-23.5 56.5T480-280Zm240 0q-33 0-56.5-23.5T640-360q0-33 23.5-56.5T720-440q33 0 56.5 23.5T800-360q0 33-23.5 56.5T720-280Zm0-240q-33 0-56.5-23.5T640-600q0-33 23.5-56.5T720-680q33 0 56.5 23.5T800-600q0 33-23.5 56.5T720-520Zm-240 0q-33 0-56.5-23.5T400-600q0-33 23.5-56.5T480-680q33 0 56.5 23.5T560-600q0 33-23.5 56.5T480-520Zm0-240q-33 0-56.5-23.5T400-840q0-33 23.5-56.5T480-920q33 0 56.5 23.5T560-840q0 33-23.5 56.5T480-760Z" /></svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg title-font font-medium">Call us</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <a href='tel:+919353263514' className="leading-relaxed text-base">+91-9353263514</a><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className={`container contact-items ${visible[3] ? 'visible' : ''}`}>
                        <form >
                            <div className="  flex flex-wrap mx-3 mb-6 ">
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0' >
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                    <input type="text" id="name" name='name' className="appearance-none  w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Name...." required />
                                </div >
                                <div className='w-full md:w-1/2 px-3'  >
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input type="mail" id="email"  name='email' className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500  w-full" placeholder="mail@email.com" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap mx-3 mb-6">
                                <div className='w-full px-3' >
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                    <textarea id="message" name='message' rows="4"  className="border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500  w-full" placeholder="Write your thoughts here..."></textarea>



                                    <button type="submit" className={` bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2  text-white`}>Submit</button>
                                   
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
    
        </>
  )
}
