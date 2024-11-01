import { CardBody, CardContainer, CardItem } from "@/components/UI/3d-card";
import Image from "next/image";
import { projects } from "@/data";

function Projects() {
  return (
    <div id="projects" className="pt-[65px] pb-[200px]">
        <p className="heading mb-14 max-w-[85vw] md:max-w-2xl lg:max-w-[60vw] mx-auto">A small selection of<span className="text-cyan"> my recent projects</span></p>

        <div className="flex flex-wrap gap-x-20 gap-y-24  justify-center mx-auto w-[90%] ">
            {projects.map(project => (
                <a  key={project.id} href={project.link} target="_blank">
                    <CardContainer className="cursor-pointer inter-var">
                        <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-cyan bg-black-100  w-auto sm:w-[30rem] h-auto rounded-xl pb-7">
                            <CardItem translateZ="100" className="w-full mb-6">
                                <Image src={project.img} height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
                            </CardItem>
                            <CardItem translateZ="50" className="text-2xl font-bold text-cyan px-6" >
                                {project.title}
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="max-w-sm mt-2 text-neutral-300 px-6" >
                                {project.des}
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Projects