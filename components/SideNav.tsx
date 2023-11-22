'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaRegUser,FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { IoIosImages } from "react-icons/io";
import { BsBriefcase, BsGraphUpArrow } from "react-icons/bs";
import { TiPen } from "react-icons/ti";
import MenuImage from '@/public/images/mainMenuIcons/NavLogo.svg';
// import { ScrollArea } from "@/components/ui/react-scroll-area"


import { usePathname } from 'next/navigation';



function SideNav() {

  const pathname = usePathname();

  return (
    <header>
      <div className="flex flex-col justify-between h-screen bg-custom-gray dark:bg-custom-dark-3 sticky top-0 border-r-4 border-white dark:border-custom-dark-1">
        <div>
          <div className="mb-10">
            <Link href='/'>
              <Image
                src={MenuImage}
                alt="Logo"
                width={87}
                height={78}
                priority
              >
              </Image>
            </Link>
          </div>
          <nav>

            <Link href='/'>
              <div className={`text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition ease delay-100 relative
                ${pathname === '/' ? ' text-sky-500 hover:text-sky-500 dark:text-sky-500' : ''}
                `}> 
                <div className="py-4 grid justify-items-center	">
                  <FaRegUser className="text-2xl mb-2"/> Home
                </div>
                <div className={`${pathname === '/' ? 'h-full w-[4px] bg-gradient-to-b from-custom-blue to-custom-green absolute right-0 mr-[-4px]' : ''}`}></div>
                <div className={`${pathname === '/' ? 'h-full w-full bg-gradient-to-b from-custom-blue to-custom-green absolute opacity-20' : ''}`}></div>
              </div>
            </Link>

            <Link href='/projects'>
              <div className={`text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition ease delay-100 relative
                ${pathname === '/projects' ? ' text-sky-500 hover:text-sky-500 dark:text-sky-500' : ''}
                `}> 
                <div className="py-4 grid justify-items-center	">
                  <IoIosImages className="text-2xl mb-2"/> Projrcts
                </div>
                <div className={`${pathname === '/projects' ? 'h-full w-[4px] bg-gradient-to-b from-custom-blue to-custom-green absolute right-0 mr-[-4px]' : ''}`}></div>
                <div className={`${pathname === '/projects' ? 'h-full w-full bg-gradient-to-b from-custom-blue to-custom-green absolute opacity-20' : ''}`}></div>
              </div>
            </Link>

            <Link href='/businesses'>
              <div className={`text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition ease delay-100 relative
                ${pathname === '/businesses' ? ' text-sky-500 hover:text-sky-500 dark:text-sky-500' : ''}
                `}> 
                <div className="py-4 grid justify-items-center	">
                  <BsBriefcase className="text-2xl mb-2"/> Businesses
                </div>
                <div className={`${pathname === '/businesses' ? 'h-full w-[4px] bg-gradient-to-b from-custom-blue to-custom-green absolute right-0 mr-[-4px]' : ''}`}></div>
                <div className={`${pathname === '/businesses' ? 'h-full w-full bg-gradient-to-b from-custom-blue to-custom-green absolute opacity-20' : ''}`}></div>
              </div>
            </Link>
           
            <Link href='/trading'>
              <div className={`text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition ease delay-100 relative
                ${pathname === '/trading' ? ' text-sky-500 hover:text-sky-500 dark:text-sky-500' : ''}
                `}> 
                <div className="py-4 grid justify-items-center	">
                  <BsGraphUpArrow className="text-2xl mb-2"/> Trading
                </div>
                <div className={`${pathname === '/trading' ? 'h-full w-[4px] bg-gradient-to-b from-custom-blue to-custom-green absolute right-0 mr-[-4px]' : ''}`}></div>
                <div className={`${pathname === '/trading' ? 'h-full w-full bg-gradient-to-b from-custom-blue to-custom-green absolute opacity-20' : ''}`}></div>
              </div>
            </Link>

            <Link href='/blog'>
              <div className={`text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition ease delay-100 relative
                ${pathname === '/blog' ? ' text-sky-500 hover:text-sky-500 dark:text-sky-500' : ''}
                `}> 
                <div className="py-4 grid justify-items-center	">
                  <TiPen className="text-2xl mb-2"/> Blog
                </div>
                <div className={`${pathname === '/blog' ? 'h-full w-[4px] bg-gradient-to-b from-custom-blue to-custom-green absolute right-0 mr-[-4px]' : ''}`}></div>
                <div className={`${pathname === '/blog' ? 'h-full w-full bg-gradient-to-b from-custom-blue to-custom-green absolute opacity-20' : ''}`}></div>
              </div>
            </Link>

          </nav>
        </div>
        
        <div className="mb-12">
          <div className="grid justify-items-stretch">
            <div className="h-0.5 bg-custom-gray-link w-2/4 justify-self-center my-5"></div>
          </div>
          <Link target="_blank" href='https://www.linkedin.com/in/stephenleachman/'>
            <div className="py-2 text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition ease delay-100"> 
              <FaLinkedin className="text-2xl mb-2"/>
            </div>
          </Link>
          <Link target="_blank" href='https://www.linkedin.com/in/stephenleachman/'>
            <div className="py-2 text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition ease delay-100"> 
              <FaInstagram className="text-2xl mb-2"/>
            </div>
          </Link>
          <Link target="_blank" href='https://www.linkedin.com/in/stephenleachman/'>
            <div className="py-2 text-xs grid justify-items-center text-custom-gray-link dark:text-custom-dark-text hover:text-sky-500 transition ease delay-100"> 
              <FaGithub className="text-2xl mb-2"/>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SideNav
