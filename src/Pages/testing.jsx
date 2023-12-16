import React from 'react'

export default function Testing() {
    return (
        <>
            <div id='parent' className='flex flex-col md:flex-row'>
                {/* category */}
                <div id='category ' className='flex flex-col w-full md:w-1/4'>
                    <p className='font-bold text-3xl m-3 '>Category</p>
                    <button className="btn w-11/12 mx-auto  my-1 flex justify-start">pipeline service</button>
                    <button className="btn w-11/12 mx-auto  my-1 flex justify-start">pipeline service</button>
                    <button className="btn w-11/12 mx-auto  my-1 flex justify-start">pipeline service</button>
                </div>
                {/* service card */}
                <div id='service-card' className='md:w-3/4'>
                <p className='font-bold text-3xl m-3'>service card</p>
                <div className='bg-black text-white w-10/12 h-44 mx-auto'>this is card</div>
                <div className='bg-black text-white w-10/12 h-44 mx-auto'>this is card</div>
                <div className='bg-black text-white w-10/12 h-44 mx-auto'>this is card</div>
                <div className='bg-black text-white w-10/12 h-44 mx-auto'>this is card</div>
                <div className='bg-black text-white w-10/12 h-44 mx-auto'>this is card</div>
                <div className='bg-black text-white w-10/12 h-44 mx-auto'>this is card</div>
                </div>
            </div>
        </>
    )
}
