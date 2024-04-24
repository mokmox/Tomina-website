import React from 'react';
import Slider from './Slider';
import img from '../images/Frame.png';



const Api = [
    {

        text: 'GARLIC POWDER',
        left: 1,
    },
    {

        text: 'Temato Powder',
        left: 1,
    }
]


function Product() {

    return (
        <>
            <div className='bg-[#B8AA84] px-2 md:px-4 lg:px-8 py-12 '>
                <div className=''>
                    <div className=''>
                        <h1 className='text-4xl md:text-6xl text-white text-center pb-8 md:pb-16 font-bold'>Our Products</h1>
                    </div>
                    <div className=''>
                        <Slider data={Api} />
                        <div className='w-full flex justify-center items-center pt-3'>
                            <button className='text-2xl  bg-[#004F2D] text-center text-white mx-auto !mt-0 rounded-full py-2 px-12'>
                                See more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='bg-[#B8AA84]'>
                <svg width="1360" height="203" viewBox="0 0 1360 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 155.15C383.6 297.59 822.5 74.2001 1228.72 74.5101C1278.92 71.3601 1324.6 74.8501 1366 83.9401V8.62005C1083.58 -33.4299 707.69 97.35 452.37 117.47C436.27 118.74 420.19 120.26 404.15 122.07C223.75 142.5 95.64 104.3 0 66.05V155.15Z" fill="#A51E1E" />
                </svg>
            </div> */}
        </>
    );
}

export default Product;
