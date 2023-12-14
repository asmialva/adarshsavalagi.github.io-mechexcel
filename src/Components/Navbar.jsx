import React, { useEffect, useState } from 'react';
import Logo from '../assets/LOGO.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setByAmount } from '../reducers/cartReducer'


export default function Navbar() {
    const history = useNavigate();

    // reducer start
    const count = useSelector((state) => state.State.value)
    const dispatch = useDispatch()
    // reducer stop 


    const [scrolltopdata, setscrolltopdata] = useState('');
    const [isTop, setIsTop] = useState('hidden');
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const scrollToSection = (name, num) => {
        handletoggle();
        if (count == 2) {
            setTimeout(() => {
                const nextSection = document.getElementById(name);
                if (nextSection) {
                    const sectionTop = nextSection.getBoundingClientRect().top;
                    window.scrollBy({
                        top: sectionTop - 250,
                        behavior: 'smooth'
                    });
                    dispatch(setByAmount(num));
                }
            }, 200);
            history('/adarshsavalagi.github.io-mechexcel/');
        }
        console.log(count);
        const nextSection = document.getElementById(name);
        if (nextSection) {
            const sectionTop = nextSection.getBoundingClientRect().top;
            window.scrollBy({
                top: sectionTop - 250,
                behavior: 'smooth'
            });
            dispatch(setByAmount(num));
        }
    };



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
    }, []);



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
                                    <svg id='open' className=" w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                    <svg id='close' className="hidden  flex-shrink-0  w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                                <Link duration={100} offset={-70} className={`font-medium ${count == 1 ? "text-blue-600" : "text-gray-500"} sm:py-6 hover:text-blue-900 hover:underline`} to="/adarshsavalagi.github.io-mechexcel/" aria-current="page" onClick={() => { scrollToSection('home', 1); }}>HOME</Link>
                                <Link duration={100} offset={-70} className={`font-medium ${count == 2 ? "text-blue-600" : "text-gray-500"} sm:py-6 hover:text-blue-900 hover:underline`} to="/adarshsavalagi.github.io-mechexcel/about" onClick={() => { dispatch(setByAmount(2)); handletoggle(); }}>ABOUT US</Link>
                                <Link to='/adarshsavalagi.github.io-mechexcel/service' className={`font-medium ${count == 3 ? "text-blue-600" : "text-gray-500"} sm:py-6 hover:text-blue-900 hover:underline`} onClick={() => { scrollToSection('services', 3); }}>
                                    SERVICES
                                </Link>
                                <a className={`font-medium ${count == 4 ? "text-blue-600" : "text-gray-500"} sm:py-6 hover:text-blue-900 hover:underline`} onClick={() => { scrollToSection('contact', 4); }}>
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
