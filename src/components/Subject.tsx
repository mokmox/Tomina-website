import React from 'react'
import Slider from './Slider'
import img from '../images/Rectangle2.png'
import bg from '../images/Vector1.png'
const Api = [
    {
        image: img,
        text: 'GARLIC POWDER',
        left: 10,
        background: bg
    },
    {
        image: img,
        text: 'Temato Powder',
        left: 10,
        background: bg
    },
    {
        image: img,
        text: 'Temato Powder',
        left: 10,
        background: bg
    }
]
const Subject = () => {
    return (
        <div className='bg-red-500'>
            <Slider data={Api} />
        </div>
    )
}

export default Subject
