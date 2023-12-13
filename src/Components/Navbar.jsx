import React, { useEffect, useState } from 'react';
import Logo from '../assets/LOGO.jpeg';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [scrolltopdata, setscrolltopdata] = useState('');
    const [isTop, setIsTop] = useState('hidden');
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setscrolltopdata('fixed');
                setIsTop('');
            } else {
                setscrolltopdata('');
                setIsTop('hidden');
            }
        });
    }, [])
    const [isMenuOpen, toggleMenu] = useState(true);
    const handletoggle = () => {
      toggleMenu(!isMenuOpen);
      if (isMenuOpen) {
        document.getElementById('navbar-collapse-with-animation').classList.remove('hidden');
        document.getElementById('close').classList.remove('hidden');
        document.getElementById('open').classList.add('hidden');
    } else {
        document.getElementById('navbar-collapse-with-animation').classList.add('hidden');
        document.getElementById('close').classList.add('hidden');
        document.getElementById('open').classList.remove('hidden');
      }
    }
    return (
        <>
        <header>
            <div className={`${scrolltopdata} top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 md:h-24`} style={{ width: '100%' }}>
                <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <img src={Logo} className="Logo" />
                        <div className="sm:hidden">
                            <button type="button" onClick={handletoggle} className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " >
                                <svg id='open'  className=" w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <svg id='close' className="hidden block flex-shrink-0  w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                            <Link className="font-medium text-blue-600 sm:py-6 " to="/adarshsavalagi.github.io-mechexcel/" aria-current="page">HOME</Link>
                            <Link className="font-medium text-gray-500 hover:text-gray-400 sm:py-6" to="/adarshsavalagi.github.io-mechexcel/about">ABOUT US</Link>

                            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                                <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium  ">
                                    SERVICES
                                    <svg className="ms-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </button>

                                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2  before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                                        PIPELINE SERVICE
                                    </a>


                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                                        INDUSTRIAL SERVICES
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                                        MANUFACTURING FACILITY
                                    </a>
                                </div>
                            </div>

                            <a className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600  sm:my-6 " href="#">
                                CONTACT US
                            </a>
                        </div>
                    </div>
                </nav>

            </div>
        </header>
            <button onClick={scrollToTop} title="scroll to top"
                className={`${isTop} fixed z-50 bottom-8 right-8 dark:bg-gray-900 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-2xl hover:bg-grey-700 `}>&uarr;</button>
        </>
    )
}
