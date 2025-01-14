
function WhyChooseMe() {
  return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 items-center gap-5 justify-between">
            <div>
        <span className="text-blue-600 mb-4 text-center md:text-left font-semibold block">Why choose me</span>
                <h1 className="font-bold text-center md:text-left text-3xl md:text-5xl">Your Pathway to Academic Excellence</h1>
                <p className="text-[#b5b7cb] my-4">
                Choosing the right support for your academic journey is crucial. I am committed to providing personalized, effective, and engaging educational experiences that empower students to thrive. Here’s why you can trust me to help you achieve your goals:
                </p>
                <div className="flex flex-col gap-2 ml-2">
                    <span className="text-[#b5b7cb]">1. Tailored learning experiences that cater to individual needs.</span>
                    <span className="text-[#b5b7cb]">2. A proven track record of helping students achieve their academic goals.</span>
                    <span className="text-[#b5b7cb]">3. Comprehensive support across tutoring, exam preparation, and assignments.</span>
                    <span className="text-[#b5b7cb]">4. A passionate and dedicated approach to fostering student success.</span>
                </div>
                <div className="flex justify-center md:justify-start">
                <button className="bg-gradient-to-r from-sky-500 via-blue-500 to-blue-800 px-8 mt-8 py-2 rounded-md">
                <a
                href="#contact"
              >
               Let&apos;s Talk
              </a>
                </button>
                </div>
            </div>
            <img src="/feature-illustration-1-dark.svg" alt="" className="w-[90%]" />
        </div>

  )
}

export default WhyChooseMe