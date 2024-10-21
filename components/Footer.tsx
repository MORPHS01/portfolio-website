import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "@/components/UI/MagicButton";
import Link from "next/link";
import Image from "next/image";


function Footer(){
  return (
    <footer className="relative w-full pt-20 pb-14" id="contact">

        <div className="h-full w-full bg-grid-white/[0.025] flex items-center justify-center absolute bottom-0 left-0">
            <div className="absolute pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

      <div className="flex flex-col items-center">
        <h1 className="heading max-w-[85vw] md:max-w-2xl lg:max-w-[60vw] mx-auto">
          Ready to take <span className="text-cyan">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-[85vw] md:max-w-3xl lg:max-w-[65vw] mx-auto">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ayonimofe2202@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-[90%] mx-auto">
        <p className="md:text-base text-sm md:font-normal font-light max-md:mb-5">
          Copyright © 2024 <span className="text-cyan">Ayonimofe Atoyebi</span>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div key={info.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300" >
              <Link href={info.link} target="blank"><Image src={info.img} alt="icons" width={20} height={20} /></Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;