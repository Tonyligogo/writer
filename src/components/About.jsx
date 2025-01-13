
function About() {
  return (
    <div className="h-screen my-10 md:mt-0 grid place-content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="relative">
        <img src="https://www.shutterstock.com/image-photo/man-writing-text-document-essay-600nw-2376208001.jpg" alt="Me" className="rounded-xl" />
        <span className="absolute bg-white rounded-full size-28 md:size-32 -bottom-8 -right-2 md:-right-8 grid place-content-center"> <span className="text-3xl md:text-4xl font-semibold text-center text-orange-600">6+<small className="text-sm block text-center text-[#696969]">Years of <br /> Experience</small></span></span>
        </div>
        <div>
            <span className="font-semibold text-center md:text-left block text-blue-600">About me</span>
            <p className="text-3xl text-center md:text-left font-bold my-3">Your Partner in Academic Success</p>
            <p className="text-[17px] text-center md:text-left tracking-wide text-[#b5b7cb]">I am a passionate educator and writer dedicated to fostering a positive learning environment. My goal is to help students navigate their academic journey and unlock their full potential by providing personalized support and guidance tailored to their unique needs.</p>
            <div className="flex justify-center md:justify-start">
            <button className="bg-gradient-to-r from-sky-500 via-blue-500 to-blue-800 px-8 mt-8 py-2 rounded-md">
            <a
                href="https://wa.me/+12183107871"
                target="_blank" 
                rel="noopener noreferrer"
              >
               Let&apos;s Talk
              </a>
              </button>
            </div>
            </div>    
    </div>
    </div>
  )
}

export default About