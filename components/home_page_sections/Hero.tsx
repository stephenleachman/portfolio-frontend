import Image from 'next/image'

function Hero() {
  return (
    <div className="flex justify-center h-full z-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-1 content-center">
          <div>
            <div className="flex items-center">
              <h2 className="text-custom-dark-2 dark:text-gray-50 text-4xl mb-10 tracking-wide">Hey, I’m</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-custom-blue to-custom-green rounded ml-5 self-center mb-10"></div>
            </div>
            <h1 className="text-custom-dark-2 dark:text-gray-50 text-7xl	tracking-wide">Stephen Leachman</h1>
            <h2 className="text-custom-dark-2 dark:text-gray-50 text-4xl	my-10 font-semibold tracking-wider"> A <span className="bg-gradient-to-r from-custom-blue to-custom-green bg-clip-text text-transparent">Web Developer</span></h2>
            <p className="text-custom-dark-1 dark:text-custom-dark-text leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac enim mi pharetra amet.
            </p>
          </div>
          <div>
            {/* <Image
              src={HeroImage}
            >

            </Image> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
