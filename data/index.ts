import image1 from "@/public/images/morphyy-dashboard.png"
import image2 from "@/public/images/bookmark.png"
import image3 from "@/public/images/countries-of-the-world.png"
import image4 from "@/public/images/easybank.png"
import image5 from "@/public/images/age-calculator.png"
import image6 from "@/public/images/to-do-list.png"

import whatsapp from "@/public/socials/whatsapp-svg.svg"
import linkedin from "@/public/socials/linkedin-svg.svg"
import github from "@/public/socials/github-svg.svg"

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experiences", link: "#experiences" },
    { name: "Contact", link: "#contact" },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "Morphyy Dashboard Application",
      des: "A modern, interactive dashboard with real-time data visualization and sleek UI design.",
      img: image1,
      link: "https://morphyy-dashboard-application.vercel.app/dashboard",
    },
    {
      id: 2,
      title: "Bookmark Landing Page", 
      des: "A clean, responsive landing page promoting a bookmarking tool with call-to-action features.",
      img: image2,
      link: "https://bookmarkcom.vercel.app/",
    },
    {
      id: 3,
      title: "Countries of the World",
      des: "An app displaying detailed country data using APIs, including population, region, and capital info.",
      img: image3,
      link: "https://countries-of-the-world-chi.vercel.app/",
    },
    {
      id: 4,
      title: "Easybank Landing Page",
      des: "A visually appealing landing page showcasing digital banking features with smooth animations and responsiveness.",
      img: image4,
      link: "https://easybank-landing-page-master-ruby.vercel.app/",
    },
    {
        id: 5,
        title: "Age Calculator Application",
        des: "A user-friendly tool that calculates precise age based on the birth date the user inputs.",
        img: image5,
        link: "https://age-calculator-app-zeta-olive.vercel.app/",
      },
      {
        id: 6,
        title: "To Do List Application",
        des: "A simple task manager that enables users to create, edit, and track tasks efficiently.",
        img: image6,
        link: "https://to-do-list-app-one-chi.vercel.app/",
      },
  
  ];

  export const socialMedia = [
    {
      id: 1,
      img: whatsapp,
      link:"https://wa.me/+2348025907227?text=Hi%2C%20I%20would%20like%20to%20discuss%20about%20your%20web%20development%20services",
    },
    {
      id: 2,
      img: linkedin,
      link:"https://www.linkedin.com/in/ayonimofe-atoyebi-4272b522b",
    },
    {
      id: 3,
      img: github,
      link:"https://github.com/MORPHS01",
    },
  ];