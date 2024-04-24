import React from 'react'
import Slider2 from './Slider2'
import img from '../images/Rectangle3.png'
const Api = [
    {
        image: img,
        title: 'Garlic harvest beats expectations',
        dicription: "Gilroy Garlic sales spike as 49ers head to Super Bowl According to a press release from Christopher Ranch, the nation's largest grower and packer of fresh garlic, sales of their products have increased by 20%...",

    },
    {
        image: img,
        title: 'Temato harvest beats expectations',
        dicription: "Gilroy Garlic sales spike as 49ers head to Super Bowl According to a press release from Christopher Ranch, the nation's largest grower and packer of fresh garlic, sales of their products have increased by 20%...",

    }
]
function Detail() {
    return (
        <div>
            <div className='relative  bg-[#004F2D] w-full px-2 md:px-4 lg:px-8 py-12'>
                <Slider2 data={Api} />
            </div>
        </div>
    )
}

export default Detail
