import { Spotlight } from "@/components/UI/Spotlight";
import { TextGenerateEffect } from "./UI/TextGenerateEffect";
import MagicButton from "./UI/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

function Hero() {

  return (
    <div className="pb-20 pt-36 h-screen">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full overflow-hidden" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[100vw]" fill="blue" />
      </div>

      <div className="h-screen w-full bg-grid-white/[0.025] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with Next.js
            </p>
            <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences"/>
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi, I&apos;m Ayonimofe, a front-end Developer based in Nigeria.
            </p>

            <a href="#projects">
              <MagicButton title="Show my projects" icon={<FaLocationArrow/>}/>
            </a>
        </div>
      </div>
      


    </div>
  );
}

export default Hero