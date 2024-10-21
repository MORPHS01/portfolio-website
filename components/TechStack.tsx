import Marquee from "react-fast-marquee"
import Image from "next/image"

import HTMLlogo from "@/public/logos/html-5-svgrepo-com.svg"
import HTMLtext from "@/public/logos/html-svgrepo-com.svg"

import CSSlogo from "@/public/logos/css3-svgrepo-com.svg"

import JSlogo from "@/public/logos/javascript-svgrepo-com.svg"

import Reactlogo from "@/public/logos/react-svgrepo-com.svg"

import tailwindlogo from "@/public/logos/tailwind-svgrepo-com.svg"

import typescriptlogo from "@/public/logos/typescript-logo-svgrepo-com.svg"
import typescripttext from "@/public/logos/typescript-svgrepo-com.svg"

import Framerlogo from "@/public/logos/framer-svgrepo-com.svg"

import nextlogo from "@/public/logos/nextjs-svgrepo-com.svg"

import nexttext from "@/public/logos/nextjs-text-svgrepo-com.svg"




function TechStack() {
  return (
    <div className="pt-[65px] pb-[100px]">
        <p className="heading mb-12 max-w-[85vw] md:max-w-2xl lg:max-w-[60vw] mx-auto">My Tech<span className="text-cyan"> Stack</span></p>

        <Marquee direction="left" gradient={true} gradientWidth="12%" gradientColor="#000319">
            <div className="flex gap-5 mx-16 items-center">
                <Image width={100} src={HTMLlogo} alt="logo" />
                <Image width={100} src={HTMLtext} alt="logo"/>
            </div>

            <div className="flex gap-5 mx-16 items-center">
                <Image width={100} src={CSSlogo} alt="logo" />
                <p className="heading">CSS</p>
            </div>

            <div className="flex gap-5 mx-16 items-center">
                <Image width={100} src={JSlogo} alt="logo" />
                <p className="heading">JavaScript</p>
            </div>

            <div className="flex gap-5 mx-16 items-center">
                <Image width={100} src={Reactlogo} alt="logo" />
                <p className="heading text-cyan">React</p>
            </div>

            <div className="flex gap-5 mx-16 items-center">
                <Image width={100} src={tailwindlogo} alt="logo" />
                <p className="heading font-semibold">tailwindcss</p>
            </div>

            <div className="flex gap-5 mx-16 items-center">
                <Image width={100} src={typescriptlogo} alt="logo" />
                <Image width={200} src={typescripttext} alt="logo" />
            </div>

            <div className="flex gap-5 mx-16 items-center">
                <Image width={100} src={Framerlogo} alt="logo" />
                <p className="heading">Framer motion.</p>
            </div>

            <div className="flex gap-5 mx-16 items-center">
                <Image width={100} src={nextlogo} alt="logo" />
                <Image width={100} src={nexttext} alt="logo" />
            </div> 
        </Marquee>

    </div>
  )
}

export default TechStack