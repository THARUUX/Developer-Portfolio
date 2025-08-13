'use client';

import Image from "next/image";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { FaAngleDoubleRight, FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import SpotlightCard from "@/Components/SpotLightCard";
import CountUp from "@/Components/Counter";
import ShinyText from "@/Components/ShinyTest";
import SplineM from "@/Components/Spline";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi2";
import { FaInfoCircle } from "react-icons/fa";
import { FaComputerMouse } from "react-icons/fa6";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <main className="relative manrope-200 flex flex-col items-center overflow-hidden">
      {/* <SplashCursor /> */}

      <header className="fixed flex w-full justify-center py-10 z-50 backdrop-blur-[3px]">
        <div className="lg:flex gap-20">
          <Link href={'/'} className="text-3xl tracking-widest text-center manrope-400"><ShinyText text="THARUUX" disabled={false} speed={3} className='custom-class' /></Link>
          <div className="flex h-full items-center gap-10">
            <Link className="flex-col hidden lg:flex justify-center items-center manrope-300 hover:manrope-400 duration-300 group tracking-widest" href={'#Home'}>Home <span className="group-hover:w-full duration-300 w-0 h-[1px] bg-white"></span></Link>
            <Link className="flex-col hidden lg:flex justify-center items-center manrope-300 hover:manrope-400 duration-300 group tracking-widest" href={'#About'}>About <span className="group-hover:w-full duration-300 w-0 h-[1px] bg-white"></span></Link>
            <Link className="flex-col hidden lg:flex justify-center items-center manrope-300 hover:manrope-400 duration-300 group tracking-widest" href={'#Services'}>Services <span className="group-hover:w-full duration-300 w-0 h-[1px] bg-white"></span></Link>
            <Link className="flex-col hidden lg:flex justify-center items-center manrope-300 hover:manrope-400 duration-300 group tracking-widest" href={'#Portfolio'}>Portfolio <span className="group-hover:w-full duration-300 w-0 h-[1px] bg-white"></span></Link>
            <Link className="flex-col hidden lg:flex justify-center items-center manrope-300 hover:manrope-400 duration-300 group tracking-widest" href={'#Contact'}>Contact <span className="group-hover:w-full duration-300 w-0 h-[1px] bg-white"></span></Link>
        </div>
        </div>
      </header>

      <section id="Home" className="relative w-screen h-screen flex flex-col justify-end px-5 lg:px-0 py-30 gap-30">
        <Image className="w-full h-full object-cover absolute top-0 left-0 select-none -z-10" data-aos='zoom-out' data-aos-duration='3000' draggable='false' src='/tharuux.jpg' alt="hero image of tharuux" fill/>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/2 flex flex-col lg:items-end gap-2 px-5">
            <div className="manrope-100 text-7xl lg:text-9xl relative">
              <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }} 
              transition={{ duration: 1, delay: 0.5}}
              className="bg-white absolute h-full"
              style={{ whiteSpace: "nowrap" }} 
            >
            </motion.div>
              THARUUX
            </div>
            <button className="manrope-100 hidden lg:flex duration-300 hover:bg-white hover:text-black cursor-pointer border opacity-75 lg:text-xl  justify-center items-center border-white px-10 py-2 rounded-full"><ShinyText text="Get In Touch" disabled={false} speed={3} className='custom-class' /></button>
          </div>
          <span className="w-[1px] bg-white h-full"></span>
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-3 px-5 justify-end">
            <div className="manrope-100 text-3xl lg:text-7xl opacity-75 relative">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }} 
                transition={{ duration: 1, delay: 0.5}}
                className="bg-white absolute h-full"
                style={{ transformOrigin: 'right' }}
              >
              </motion.div>
              Tharusha Damsara
            </div>
            <div className="manrope-100 text-3xl lg:text-5xl opacity-75 relative">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }} 
                transition={{ duration: 1, delay: 0.5}}
                className="bg-white absolute h-full"
                style={{ whiteSpace: "nowrap" }} 
              >
              </motion.div>
              Developer & Designer
            </div>
          </div>
        </div>
        <div data-aos="fade-in" data-aos-delay='1000' className="w-full flex justify-center text-center tracking-widest "><ShinyText text="With 3+ Years of Experience in Web Development" disabled={false} speed={3} className='custom-class' /></div>
      </section>

      <section id="About" className="flex items-center justify-center gb-1">
        <div className="flex flex-col gap-20 max-w-[2000px] py-20 px-5 lg:px-20">
          <div className="w-full text-center text-5xl lg:text-7xl" data-aos='fade-in' data-aos-duration='2000'>About Me</div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex flex-col px-5 lg:px-20 gap-10 tracking-wider">
              <div className="text-justify text-sm lg:text-md" data-aos='fade-in' data-aos-duration='2000'>Problem-solving is a favorite pursuit in my programming endeavors; I  find great satisfaction in debugging and completing projects. With 4  years of experience in web development, I am an avid supporter of  open-source initiatives and proficient in mobile and computer repair. My primary source of learning is the Internet.</div>
              <div className="text-justify text-sm lg:text-md" data-aos='fade-in' data-aos-duration='2000'>I am passionately drawn to diverse fields such as Web Development, Cybersecurity, Music Production, Western and Traditional Music Instruments, Graphic Designing, Photography, and Videography.</div>
              <div className="text-9xl lg:text-[300px] blur-[4px] lg:blur-sm" data-aos='fade-in' data-aos-duration='2000'><CountUp from={0} to={19} separator="," direction="up" duration={1} className="count-up-text"/>+</div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col px-5 lg:px-20 gap-5 lg:gap-10 opacity-75 mt-10 lg:mt-0">
              <div className="text-2xl lg:text-5xl" data-aos='fade-left' data-aos-duration='2000'><CountUp from={0} to={3} separator="," direction="up" duration={1} className="count-up-text"/>+ Years os Experience</div>
              <div className="text-2xl lg:text-5xl" data-aos='fade-left' data-aos-duration='2000'><CountUp from={0} to={25} separator="," direction="up" duration={1} className="count-up-text"/>+ Projects Done</div>
              <div className="text-2xl lg:text-5xl" data-aos='fade-left' data-aos-duration='2000'><CountUp from={0} to={100} separator="," direction="up" duration={1} className="count-up-text"/>% Happy Clients</div>
              <div className="flex flex-col py-10 lg:py-20">
                <div className="flex text-5xl lg:text-7xl w-full justify-around">
                  <SiMongodb data-aos='fade-up' data-aos-delay='300' data-aos-duration='2000' className="duration-300 cursor-pointer hover:text-green-400 hover:scale-105"/>
                  <SiExpress data-aos='fade-up' data-aos-delay='600' data-aos-duration='2000' className="duration-300 cursor-pointer hover:text-white brightness-200 hover:scale-105"/>
                  <SiReact data-aos='fade-up' data-aos-delay='900' data-aos-duration='2000' className="duration-300 cursor-pointer hover:text-blue-500 brightness-200 hover:scale-105"/>
                  <SiNodedotjs data-aos='fade-up' data-aos-delay='1200' data-aos-duration='2000' className="duration-300 cursor-pointer hover:text-green-500 brightness-200 hover:scale-105"/>
                </div>
                <div className="w-full text-center py-5 text-xl"  data-aos-delay='1500' data-aos='fade-up' data-aos-duration='2000'>Core Stack</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Services"
        className="bg-cover bg-center bg-fixed flex items-center justify-center w-full"
        style={{ backgroundImage: "url('/tharuux.jpg')" }}
      >
        <div className="w-full h-full backdrop-blur-3xl flex justify-center">
          <div className="flex flex-col gap-20 w-full max-w-[2000px] py-20 px-5 lg:px-20">
            <div className="w-full text-center flex flex-col gap-5">
              <div className="text-5xl lg:text-7xl" data-aos='fade-in' data-aos-duration='2000'>What I Do</div>
              <div className="tracking-widest text-sm lg:text-md" data-aos='fade-in' data-aos-duration='2000'>I possess proficiency in programming and IT, showcasing a versatile skill set that encompasses these areas with competence and dedication.</div>
            </div>
            <div className="flex flex-wrap gap-10 justify-around">
              <div data-aos='fade-in' data-aos-duration='2000' className="w-full lg:w-2/5 relative cursor-pointer hover:shadow-lg hover:shadow-white/20 duration-300 hover:scale-105 flex items-end aspect-[5/3] group">
                <Image
                  className="w-full h-auto object-cover"
                  src="/web-ui.png"
                  draggable={false}
                  alt="web developing and ui/ux designing"
                  fill
                />
                <div className="w-full bg-white/10 group-hover:bg-white/20 duration-300 absolute bottom-0 left-0 px-5 lg:px-10 py-3 lg:py-5 backdrop-blur-sm flex flex-col gap-3">
                  <div className="flex justify-between items-center"> <div className="text-lg lg:text-3xl">Web Developing & UI/UX Designing</div> <div className="text-md px-1 group-hover:opacity-20 duration-300"><BsFillInfoCircleFill/></div>  </div>
                  <div className="text-justify tracking-wider text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-[max-height,opacity] duration-300 ease-in-out">
                    Passionate web developer skilled in building dynamic and user-friendly websites. Experienced in Next.js, React.js and PHP with a focus on creating efficient and scalable applications. Always eager to learn and bring ideas to life through clean and functional code.
                  </div>
                </div>
              </div>
              <div data-aos='fade-in' data-aos-duration='2000' className="w-full lg:w-2/5 relative cursor-pointer hover:shadow-lg hover:shadow-white/20 duration-300 hover:scale-105 flex items-end aspect-[5/3] group">
                <Image
                  className="w-full h-auto object-cover"
                  src="/system-developing.jpg"
                  draggable={false}
                  alt="system developing"
                  fill
                />
                <div className="w-full bg-white/10 group-hover:bg-white/20 duration-300 absolute bottom-0 left-0 px-5 lg:px-10 py-3 lg:py-5 backdrop-blur-sm flex flex-col gap-3">
                  <div className="flex justify-between items-center"> <div className="text-lg lg:text-3xl">System Developing</div> <div className="text-md px-1 group-hover:opacity-20 duration-300"><BsFillInfoCircleFill/></div>  </div>
                  <div className="text-justify tracking-wider text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-[max-height,opacity] duration-300 ease-in-out">
                    Experienced system developer specializing in web-based solutions. Skilled in Next.js, React.js, Node.js, Express.js, MongoDB, MySQL & SQLite, with a focus on building efficient, scalable, and user-friendly systems. Passionate about creating seamless digital experiences through clean code and innovative solutions.                  </div>
                </div>
              </div>
              <div data-aos='fade-in' data-aos-duration='2000' className="w-full lg:w-2/5 relative cursor-pointer hover:shadow-lg hover:shadow-white/20 duration-300 hover:scale-105 flex items-end aspect-[5/3] group">
                <Image
                  className="w-full h-auto object-cover grayscale"
                  src="/digital-marketing.png"
                  draggable={false}
                  alt="Digital Marketing"
                  fill
                />
                <div className="w-full bg-white/10 group-hover:bg-white/20 duration-300 absolute bottom-0 left-0 px-5 lg:px-10 py-3 lg:py-5 backdrop-blur-sm flex flex-col gap-3">
                  <div className="flex justify-between items-center"> <div className="text-lg lg:text-3xl">Digital Marketing</div> <div className="text-md px-1 group-hover:opacity-20 duration-300"><BsFillInfoCircleFill/></div>  </div>
                  <div className="text-justify tracking-wider text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-[max-height,opacity] duration-300 ease-in-out">
                    Results-driven digital marketer with a passion for creating impactful online strategies. Skilled in SEO, social media marketing, content creation, and data-driven campaigns to boost brand visibility and engagement. Focused on delivering measurable results and maximizing online growth.                  </div>
                </div>
              </div>
              <div data-aos='fade-in' data-aos-duration='2000' className="w-full lg:w-2/5 relative cursor-pointer hover:shadow-lg hover:shadow-white/20 duration-300 hover:scale-105 flex items-end aspect-[5/3] group">
                <Image
                  className="w-full h-auto object-cover"
                  src="/graphic-designing.png"
                  draggable={false}
                  alt="Graphic Designing"
                  fill
                />
                <div className="w-full bg-white/10 group-hover:bg-white/20 duration-300 absolute bottom-0 left-0 px-5 lg:px-10 py-3 lg:py-5 backdrop-blur-sm flex flex-col gap-3">
                  <div className="flex justify-between items-center"> <div className="text-lg lg:text-3xl">Graphic Designing</div> <div className="text-md px-1 group-hover:opacity-20 duration-300"><BsFillInfoCircleFill/></div>  </div>
                  <div className="text-justify tracking-wider text-sm max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-[max-height,opacity] duration-300 ease-in-out">
                    Creative graphics designer with a keen eye for detail and a passion for visual storytelling. Skilled in branding, logo design, social media graphics, and UI/UX design. Dedicated to creating visually compelling designs that leave a lasting impact.                </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section id="Portfolio"
        className="bg-black flex items-center justify-center relative w-full"
      >
        <SplineM />
        <div className="absolute z-50 left-0 w-full h-15 lg:h-15 bottom-0 bg-black" ></div>
        <div className="w-full h-full  flex justify-center">
          <div className="flex flex-col gap-20 max-w-[2000px] py-20 px-5 lg:px-20">
            <div className="w-full text-center flex flex-col gap-5">
              <div className="text-5xl lg:text-7xl" data-aos='fade-in' data-aos-duration='2000'>My Recent Works</div>
              <div className="tracking-widest text-sm lg:text-md" data-aos='fade-in' data-aos-duration='2000'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</div>
            </div>
            <div className="flex flex-wrap gap-10 justify-around">
              <SpotlightCard data-aos='fade-in' data-aos-duration='2000' spotlightColor="rgba(250, 250, 250, 0.5)" className="w-full lg:w-2/7 items-center cursor-pointer bg-white/25 backdrop-blur-md brightness-105 px-5 p-2 lg:p-5 border border-white/30 flex flex-col">
                <Image src='/project1.webp' className="w-full h-auto " width={1000} height={1000} alt="Project 1" />
                <div className="w-full flex flex-wrap pt-5 gap-3">
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">NEXT.JS</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">MONGODB</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">REACT.JS</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">TAILWIND CSS</div>
                </div>
              </SpotlightCard>
              <SpotlightCard data-aos='fade-in' data-aos-duration='2000' spotlightColor="rgba(250, 250, 250, 0.5)" className="w-full lg:w-2/7 items-center cursor-pointer bg-white/25 backdrop-blur-md brightness-105 px-5 p-2 lg:p-5 border border-white/30 flex flex-col">
                <Image src='/project3.png' className="w-full h-auto " width={1000} height={1000} alt="Project 1" />
                <div className="w-full flex flex-wrap pt-5 gap-3">
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">NEXT.JS</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">MY SQL</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">REACT.JS</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">TAILWIND CSS</div>
                </div>
              </SpotlightCard>
              <SpotlightCard data-aos='fade-in' data-aos-duration='2000' spotlightColor="rgba(250, 250, 250, 0.5)" className="w-full lg:w-2/7 items-center cursor-pointer bg-white/25 backdrop-blur-md brightness-105 px-5 p-2 lg:p-5 border border-white/30 flex flex-col">
                <Image src='/project8.png' className="w-full h-auto " width={1000} height={1000} alt="Project 1" />
                <div className="w-full flex flex-wrap pt-5 gap-3">
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">NEXT.JS</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">MY SQL</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">REACT.JS</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">TAILWIND CSS</div>
                </div>
              </SpotlightCard>
              <SpotlightCard data-aos='fade-in' data-aos-duration='2000' spotlightColor="rgba(250, 250, 250, 0.5)" className="w-full lg:w-2/7 items-center cursor-pointer bg-white/25 backdrop-blur-md brightness-105 px-5 p-2 lg:p-5 border border-white/30 flex flex-col">
                <Image src='/project7.png' className="w-full h-auto " width={1000} height={1000} alt="Project 1" />
                <div className="w-full flex flex-wrap pt-5 gap-3">
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">WORDPRESS</div>
                </div>
              </SpotlightCard>
              <SpotlightCard data-aos='fade-in' data-aos-duration='2000' spotlightColor="rgba(250, 250, 250, 0.5)" className="w-full lg:w-2/7 items-center cursor-pointer bg-white/25 backdrop-blur-md brightness-105 px-5 p-2 lg:p-5 border border-white/30 flex flex-col">
                <Image src='/project4.webp' className="w-full h-auto " width={1000} height={1000} alt="Project 1" />
                <div className="w-full flex flex-wrap pt-5 gap-3">
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">NODE.JS</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">MONGODB</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">EXPRESS.JS</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">TAILWINDCSS</div>
                </div>
              </SpotlightCard>
              <SpotlightCard data-aos='fade-in' data-aos-duration='2000' spotlightColor="rgba(250, 250, 250, 0.5)" className="w-full lg:w-2/7 items-center cursor-pointer bg-white/25 backdrop-blur-md brightness-105 px-5 p-2 lg:p-5 border border-white/30 flex flex-col">
                <Image src='/project2.webp' className="w-full h-auto " width={1000} height={1000} alt="Project 1" />
                <div className="w-full flex flex-wrap pt-5 gap-3">
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">PHP</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">BOOTSRAP</div>
                </div>
              </SpotlightCard>
              {/*<SpotlightCard spotlightColor="rgba(250, 250, 250, 0.5)" className="w-full lg:w-2/7 items-center cursor-pointer bg-white/25 backdrop-blur-md brightness-105 px-5 p-2 lg:p-5 border border-white/30 flex flex-col">
                <Image src='/project5.webp' className="w-full h-auto " width={1000} height={1000} alt="Project 1" />
                <div className="w-full flex flex-wrap pt-5 gap-3">
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">PHP</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">BOOTSRAP</div>
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">MYSQL</div>
                </div>
              </div>
              <SpotlightCard spotlightColor="rgba(250, 250, 250, 0.5)" className="w-full lg:w-2/7 items-center cursor-pointer bg-white/25 backdrop-blur-md brightness-105 px-5 p-2 lg:p-5 border border-white/30 flex flex-col">
                <Image src='/project8.webp' className="w-full h-auto " width={1000} height={1000} alt="Project 1" />
                <div className="w-full flex flex-wrap pt-5 gap-3">
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">PYTHON</div>
                </div>
              </div>
              <SpotlightCard spotlightColor="rgba(250, 250, 250, 0.5)" className="w-full lg:w-2/7 items-center cursor-pointer bg-white/25 backdrop-blur-md brightness-105 px-5 p-2 lg:p-5 border border-white/30 flex flex-col">
                <Image src='/images.jpeg' className="w-full h-auto " width={1000} height={1000} alt="Project 1" />
                <div className="w-full flex flex-wrap pt-5 gap-3">
                  <div className="px-5 py-1 text-sm cursor-pointer h-fit border rounded-full">PHP</div>
                </div>
              </div>*/}
              <div data-aos='fade-in' data-aos-duration='2000' className="w-full text-center text-xl py-10 flex justify-center gap-3 items-center ">View More <FaAngleDoubleRight /></div>
            </div>

          </div>
        </div>
      </section>

      <section id="Contact" className="bg-black flex items-center justify-center relative w-full">
        <div className="flex flex-col gap-20 w-full  max-w-[2000px] py-20 px-5 lg:px-20">
          <div className="w-full text-center flex flex-col gap-5">
            <div className="text-5xl lg:text-7xl" data-aos='fade-in' data-aos-duration='2000'>Let’s work together!</div>
            <div className="tracking-widest" data-aos='fade-in' data-aos-duration='2000'>I design and code beautifully simple things and i love what i do. Just simple like that!</div>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full bg-white/15 border border-gray-500 p-10">
            <div className="w-full lg:w-1/2 px-0 lg:px-10">
              <form action="" className="w-full flex flex-col gap-5">
                <input  type="name" placeholder="Enter your Name" className="border-b border-gray-400 px-3 py-1 focus:outline-0" />
                <input  type="email" placeholder="Enter your Email" className="border-b border-gray-400 px-3 py-1 focus:outline-0" />
                <input  type="tele" placeholder="Enter your contact number" className="border-b border-gray-400 px-3 py-1 focus:outline-0" />
                <button  type="submit" className="w-full border rounded-full py-3">SUBMIT</button>
              </form>
            </div>
            <div className="w-full lg:w-1/2 h-full items-center justify-center flex flex-col gap-5 ">
              <div className="flex flex-col items-center h-fit gap2 lg:gap-5 mt-10 lg:mt-0">
                <div  className="flex tracking-widest justify-center items-center gap-3 manrope-400">
                  hello@tharuux.click
                </div>
                <div className="flex justify-between text-3xl gap-10 py-5">
                  <Link href={'https://github.com/THARUUX'}><FaGithub /></Link>
                  <Link href={'https://facebook.com/THARUUX'}><FaFacebook /></Link>
                  <Link href={'https://instagram.com/tharuux-ofc'}><FaInstagram /></Link>
                  <Link  href={'https://wa.me/+94789731507'}><FaWhatsapp /></Link>
                </div>
                <div data-aos='fade-in text-xs lg:text-md' data-aos-duration='2000' className="opacity-50">#tharuux #developer #tharusha #damsara #zynex</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full flex flex-col py-5 lg:py-10 ">
        <div className="tracking-[100%] text-center text-2xl">THARUUX</div>
        <div className="tracking-[50%] text-center text-xs mt-5 mb-2">Designed & Developed by THARUUX</div>
        <div className="text-center text-xs opacity-50 mb-5 lg:mb-0">2025 copyrights allright reserved</div>
      </footer>


    </main>
  );
}
