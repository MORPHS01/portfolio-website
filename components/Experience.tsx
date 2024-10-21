"use client"
import MagicButton from "./UI/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

function Experience() {
    function handleClick(){
        window.open("https://drive.google.com/file/d/1Zuz4ZVudtaEpQW1j7KfrHZEkb2ZnuOgL/view?usp=drive_link", '_blank');
    }

  return (
    <div id="experiences" className="pt-[65px] pb-[100px]">
        <p className="heading mb-12 max-w-[85vw] md:max-w-2xl lg:max-w-[60vw] mx-auto">My<span className="text-cyan"> Work Experience</span></p>

        <div className="flex justify-center my-5">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <p className="text-center text-[19px] mb-3">As a front-end developer, I&apos;ve crafted intuitive user interfaces, optimized performance, and collaborated seamlessly to deliver responsive web experiences that blend creativity with functionality and user-centric design principles.</p>
                <MagicButton onClick={handleClick} title="View my CV" icon={<FaLocationArrow/>}/>
            </div>
        </div>
    </div>
  )
}

export default Experience