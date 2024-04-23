import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import img from '../images/garlic-182553-1.jpg'
import img1 from '../images/oldclassicpainting.jpg'
import img2 from '../images/image.png'
import TickBar from "./TickBar";
import Header from './Header'

function Main() {
    return (
        <div className="overflow-hidden bg-center bg-cover bg-norepeat h-[100vh]  bg-[url('../images/oldclassicpainting.jpg')] ">
            <div className="h-[100vh] bg-h-gradiant">
                <div className="z-10">
                    <div className="w-[100vw] h-[2rem] flex p-[1.5rem] justify-end">
                        <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                        <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                        <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                        <div className="w-[3rem] h-[3rem] rounded-full bg-red-900 ml-[.1rem]"></div>
                    </div>
                    <div className="px-[0rem] p-[2rem] md:p-[2rem] md:mt-[.1rem]">
                        <Header />
                    </div>
                    <div className="w-full">
                        <h1 className="text-5xl md:text-7xl text-white text-center mt-[4rem] md:mt-[2rem] font-bold">
                            FRESH NOW <br></br> AND ALWAYS
                        </h1>
                        <div className="flex justify-center pl-[7rem]">
                            <h1 className="text-3xl md:text-7xl text-white text-center  font-extralight">
                                Garlicious
                            </h1>
                        </div>
                        <TickBar />
                    </div>
                </div>
                {/* <div className="absolute top-[0rem] w-[100vw] h-[100vh]  bg-gradient-to-b from-transparent to-red-800"></div> */}
            </div>
        </div>
    )
}

export default Main
