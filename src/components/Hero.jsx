import Typewriter from 'typewriter-effect'
const services = [
    {id:1,name:'Tutoring', position:'-top-1/2 md:-top-3/4 left-0 md:-left-28 bg-blue-500', img:'/arrowDown.svg', imgPosition:'top-[35px] md:top-1/2 -right-8 md:-right-16'},
    {id:2,name:'Assignments', position:'-bottom-1/2 md:-bottom-3/4 -left-0 md:-left-40 bg-orange-500', img:'/arrow.svg', imgPosition:'bottom-[35px] md:bottom-1/2 -right-8 md:-right-16'},
    {id:3,name:'Get in touch now', position:'-bottom-full left-1/2 -translate-x-1/2 text-white bg-gradient-to-r from-blue-800 to-sky-500'},
    {id:4,name:'Online classes', position:'-bottom-1/2 md:-bottom-3/4 right-0 md:-right-28 bg-purple-400', img:'/arrowLeft.svg', imgPosition:'bottom-[35px] md:bottom-1/2 -left-8 md:-left-16'},
    {id:5,name:'Exams', position:'-top-1/2 md:-top-3/4 right-0 md:-right-28 bg-yellow-600', img:'/arrowDownLeft.svg', imgPosition:'top-[35px] md:top-1/2 -left-8 md:-left-16'},
]
function Hero() {
  return (
    <div className="h-[95vh] pt-[80px] grid place-content-center">
        <div className="relative">
        <h1 className="text-2xl lg:text-5xl font-bold text-center">Elevate Your Academic Journey and</h1>
        <div className='font-bold text-2xl lg:text-5xl text-center text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-sky-500 bg-clip-text'>
        <Typewriter options={{
            strings: ['Unlock your potential', 'Embrace a Brighter Future!', 'Enhance your education'],
            loop: true,
            autoStart: true,
        }}/>
        </div>
        <p className="text-[#a7a7a7] mt-4 text-center">With me, you&apos;re not just a student; you&apos;re a future leader. Explore my comprehensive services and <br /> take the first step towards academic excellence today!</p>
        {services.map((service)=>(
            <span key={service.id}>
                <span className={`absolute ${service.position} rounded-lg py-2 px-4 `}>
                    {service.name}
                <img src={service?.img} alt="" className={`w-10 md:w-16 absolute ${service.imgPosition}`} />
                    </span>
            </span>
        ))}
        </div>
    </div>
  )
}

export default Hero