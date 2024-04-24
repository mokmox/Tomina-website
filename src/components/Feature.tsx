import React from 'react'
import Card from './Slider3'
import img from '../images/Rectangle2.png'
import bg from '../images/Vector1.png'

const Api = [
    {
        image: img,
        text: 'GARLIC POWDER',
        left: 8,
        background: bg
    },
    {
        image: img,
        text: 'Temato Powder',
        left: 8,
        background: bg
    }
]

function Feature() {
    return (
        <div className='bg-[#282828] px-2 md:px-4 lg:px-8 py-12 '>
            <div className=''>
                <div className=''>
                    <h1 className='text-4xl md:text-6xl text-[#B8AA84] text-center  font-bold'>Featured Recipes</h1>
                </div>
                <div className=''>
                    <Card data={Api} />
                    <div className='w-full flex justify-center items-center pt-3'>
                        <button className='text-2xl border text-center text-white mx-auto !mt-0 rounded-full py-2 px-12'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
