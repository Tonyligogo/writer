import { Link } from "react-router-dom"

const services = [
    {id:1,name:'Tutoring', position:'-top-1/2 md:-top-3/4 left-0 md:-left-28 bg-blue-500', img:'/arrowDown.svg', imgPosition:'top-[35px] md:top-1/2 -right-8 md:-right-16'},
    {id:2,name:'Assignments', position:'-bottom-1/2 md:-bottom-3/4 -left-0 md:-left-40 bg-orange-500', img:'/arrow.svg', imgPosition:'bottom-[35px] md:bottom-1/2 -right-8 md:-right-16'},
    {id:3,name:'Get in touch now', position:'-bottom-full left-1/2 -translate-x-1/2 text-white bg-gradient-to-r from-blue-800 to-sky-500'},
    {id:4,name:'Online classes', position:'-bottom-1/2 md:-bottom-3/4 right-0 md:-right-28 bg-purple-400', img:'/arrowLeft.svg', imgPosition:'bottom-[35px] md:bottom-1/2 -left-8 md:-left-16'},
    {id:5,name:'Exams', position:'-top-1/2 md:-top-3/4 right-0 md:-right-28 bg-yellow-600', img:'/arrowDownLeft.svg', imgPosition:'top-[35px] md:top-1/2 -left-8 md:-left-16'},
]
function Hero() {
  return (
    <div className="h-[95vh] md:pt-[80px] grid place-content-center">
        <div className="relative py-5 md:py-0">
        <h1 className="text-2xl lg:text-5xl font-bold text-center">Online Courses help, <br /> Exam tips and <Link to='/login'>resources</Link> </h1>
        <p className="text-[#a7a7a7] mt-4 text-center">Explore my comprehensive services and <br /> take the first step towards academic excellence today!</p>
        {services.map((service)=>(
            <span key={service.id}>
                {service.id !== 3 && <span className={`absolute ${service.position} rounded-lg py-2 px-4 `}>
                    {service.name}
                {service.id !== 3 && <img src={service?.img} alt="arrow" className={`w-10 md:w-16 absolute ${service.imgPosition}`} />}
                    </span>}
                    {service.id === 3 && 
                <a
                href="https://wa.me/+12183107871"
                target="_blank" 
                rel="noopener noreferrer"
                className={`absolute ${service.position} rounded-lg py-2 px-4 `}
              >
                {service.name}
              </a>
                }
            </span>
        ))}
        </div>
    </div>
  )
}

export default Hero