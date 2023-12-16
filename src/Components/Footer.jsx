import React from 'react';
import Logo from '../assets/LOGO.jpeg';
import { Link, useNavigate } from 'react-router-dom';
export default function Footer() {
    return (
        <><hr />
            <footer className="footer p-10 mx-auto w-11/12  text-base-content my-3">
                <aside>
                    <img src={Logo} alt="Logo" className="Logo" />
                    <div className='my-2 text-lg'><svg className=' my-4' fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="35px" height="35px" viewBox="0 0 395.71 395.71"
                        xmlSpace="preserve">
                        <g>
                            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                        </g>
                    </svg><header className="footer-title"> REGISTERED ADDRESS</header>
                        H. No 1094, Mothenagaon<br />
                        Near Ganapati Temple,<br />
                        Uran, Raigarh(MH)<br />
                        Maharashtra - 400702,<br />
                        Bharath<br />
                    </div>
                </aside>
                <nav className='text-base'>
                    <header className="footer-title"> OUR SERVICES</header>
                <Link to='/adarshsavalagi.github.io-mechexcel/service/hottapping'>    <li className="">Hot Tappings</li></Link>
                <Link to='/adarshsavalagi.github.io-mechexcel/service/linestopping'>    <li className="">Line Stopping</li></Link>
                <Link to='/adarshsavalagi.github.io-mechexcel/service/coldcutting'>    <li className="">Cold Cutting</li></Link>
                <Link to='/adarshsavalagi.github.io-mechexcel/service/catalysthandling'>    <li className="">Catalyst Handling</li></Link>
                <Link to='/adarshsavalagi.github.io-mechexcel/service/crudeoilcleaning'>    <li className="">Crude Oil Tank Cleaning</li></Link>
                <Link to='/adarshsavalagi.github.io-mechexcel/service/pigging'>    <li className="">Mechanical Decoking - pigging</li></Link>
                <Link to='/adarshsavalagi.github.io-mechexcel/service/vaccumtanker'>    <li className="">Vaccum Tankers</li></Link>
                <Link to='/adarshsavalagi.github.io-mechexcel/service/manufacturing'>    <li className="">Manufacturing Facility</li></Link>
                </nav>
                <nav className='text-base '>
                    <h2 className="footer-title mr-2">REACH US AT:</h2>
                    <a className="flex items-center link link-hover" href='mailto:info@mechexce.in'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email" width="26px" height="26px"  className="mr-1">
                            <path fill="#222" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path><path fill="#222" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path><path fill="#222" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path>
                        </svg>  &nbsp; info@mechexce.in
                    </a>
                    <a className="flex items-center link link-hover my-1" href='mailto:operations@mechexcel.in'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="email" width="26px" height="26px" className="mr-1">
                            <path fill="#222" d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path><path fill="#222" d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path><path fill="#222" d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path>
                        </svg>  &nbsp; operations@mechexcel.in
                    </a>
                    <a className="flex l my-1" href='tel:+919353263514'>
                        <svg version="1.1" id="Layer_1"  width="26px" height="26px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.27" xmlSpace="preserve"><path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z" /></svg>
                        &nbsp; +91-9353263514
                    </a>
                </nav>
                <nav className='text-base'>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <hr />
            <div className="copyright text-center my-3">
                © 2023 Mechexcel™ . All Rights Reserved.
            </div>
        </>
    )
}

