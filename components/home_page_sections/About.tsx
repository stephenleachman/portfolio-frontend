import Image from 'next/image'

function About() {
  return (
    <div className="flex justify-center">
        <div className="bg-gradient-to-b from-custom-dark-2 to-custom-dark-3 absolute h-full w-full dark:block hidden z-0"></div>
      <div className="container grid z-10 pt-24">
        <h2 className="text-center text-5xl	dark:text-gray-50 text-custom-dark-2 tracking-wide">A Bit About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-custom-blue to-custom-green rounded justify-self-center my-8"></div>
      </div>
     
    </div>
  )
}

export default About
