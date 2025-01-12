const services = [
    {
        title: "Personalized Tutoring",
        description: "I provide tailored tutoring sessions that cater to each student's unique learning style and academic needs. My goal is to enhance understanding, build confidence, and foster a love for learning in a supportive environment."
    },
    {
        title: "Assignment Assistance",
        description: "I offer expert assistance with assignments, ensuring that students receive high-quality work that meets their deadlines. My support helps students grasp complex concepts while relieving the stress of academic workloads."
    },
    {
        title: "Online Class Representation",
        description: "Are you overwhelmed by your online courses? Do you find it challenging to keep up with assignments, projects, and exams? I offer a unique service that allows students to delegate their online coursework to me and I will complete the courses on their behalf."
    },
    {
        title: "Exam Support",
        description: "I am able to tackle exams in a variety of courses and programs."
    },
    {
        title: "Exam Resources and Tips",
        description: "I help with program entry like: TEAS, HESI A2, Kaplan entry exam, SAT/ACT, GRE, GED, MCAT, DAT, and PCAT."
    },
    {
        title: "Nursing school courses",
        description: "I help with nursing school coursework, resources and exams. The courses I do include: Fundamentals, Dosage calculations, Pharmacology,"
    },
];

const onlineCourseInstitutions = [
    "Portage Learning",
    "Straighterline",
    "Excelsior College",
    "WGU",
    "SNHU",
    "Sophia",
    "Westcostt",
    "Walden University",
    "Capella University",
    "Colorado State University",
    "Arizona State University",
    "Penn Foster College",
    "Thomas Edison State University"
];

function Services() {
  return (
    <div>
        <span className="text-blue-600 text-center font-semibold block">What I offer</span>
        <p className="text-3xl text-center font-bold mt-3 mb-10">Guiding You to Academic Excellence</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {services.map((service, index)=>(
            <li key={index} className="bg-[#1f1f27] border border-[#2a2d38] p-5 rounded-xl transition-all duration-300 ease-in-out hover:scale-110 hover:bg-black">
                <span className="font-semibold text-xl">{service.title}</span>
                <p className="text-[#b5b7cb] mt-3">{service.description}</p>
            </li>
            ))}
        </ul>
        <div className="mt-5">
            <div className="w-fit relative">
            <span className="text-blue-600 font-semibold block capitalize w-fit">I do online courses for students in</span>
            <img src="/arrowDown.svg" alt="down arrow" className='w-8 rotate-[70deg] md:rotate-0 absolute -right-5 md:-right-10 top-4 md:top-2' />
            </div>
            <ul className="flex mt-8 gap-2 gap-y-3 items-center flex-wrap">
                {onlineCourseInstitutions.map((institution)=>(
                    <li key={institution} className="bg-[#1f1f27] border border-[#2a2d38] rounded-2xl px-4 py-1">{institution}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Services