"use client"
import { motion } from "framer-motion";

const containerVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: 0,
        transition: {
            staggerChildren: 0.4
        }
    }
}

const spanVariants = {
    initial: {
        opacity: 0, 
        y: "-55vh"
    },
    animate: {
        opacity: 1, 
        y: 0
    }
}

function AboutMe() {
  return (
    <div id="about" className="pt-[65px] pb-[200px]">
        <motion.div variants={containerVariants} initial="initial" whileInView="animate" viewport={{margin: "-300px", once: true}} >
            <motion.p variants={spanVariants} className="heading mb-14">About<motion.span variants={spanVariants} transition={{ delay: 0.4 }} className="text-cyan"> Me</motion.span></motion.p>
        </motion.div>
        
        <div className="max-w-[85vw] md:max-w-3xl lg:max-w-[65vw] mx-auto text-center text-[19px]">
            <motion.div initial={{opacity: 0, x: "-55vw"}} whileInView={{opacity: 1, x: 0}} viewport={{margin: "-300px", once: true}} >
                <p>I&apos;m Ayonimofe Atoyebi, a passionate frontend developer dedicated to crafting user-friendly and visually appealing interfaces. Beyond coding, I prioritize client collaboration, fostering open communication to ensure project goals are aligned with expectations. My goal is to build seamless digital experiences that reflect both technical precision and creativity.</p>
            </motion.div>
            <motion.div initial={{opacity: 0, x: "-55vw"}} whileInView={{opacity: 1, x: 0}} viewport={{margin: "-300px", once: true}} >
                <p className="my-7">As a tech enthusiast, I constantly explore new trends in web development, aiming to stay ahead in the evolving tech landscape. I enjoy problem-solving and thrive on turning ideas into functional designs that users love to engage with.</p>
            </motion.div>
            <motion.div initial={{opacity: 0, x: "-55vw"}} whileInView={{opacity: 1, x: 0}} viewport={{margin: "-300px", once: true}} >
                <p>My core tech stack includes HTML, CSS, JavaScript, and React, complemented by Tailwind CSS, TypeScript, Framer Motion and Next.js. With these tools, I create responsive, fast, and modern web applications tailored to meet specific needs.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default AboutMe