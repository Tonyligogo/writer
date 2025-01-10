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
        description: "Are you overwhelmed by your online courses? Do you find it challenging to keep up with assignments, projects, and exams? I offer a unique service that allows students to delegate their online coursework to a dedicated professional who will complete the courses on their behalf."
    },
    {
        title: "Exam Support",
        description: "I provide comprehensive exam support, including taking exams on behalf of students. I also offer valuable resources and tips to help students prepare effectively and approach their exams with confidence."
    },
    {
        title: "Exam Resources and Tips",
        description: "I supply a wealth of exam resources, including practice tests and study guides, along with proven strategies to help students excel. My goal is to equip students with the tools they need to succeed academically."
    }
];

function Services() {
  return (
    <div>
        <span className="text-blue-600 text-center font-semibold block">What I offer</span>
        <p className="text-3xl text-center font-semibold mt-3 mb-10">Guiding You to Academic Excellence</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {services.map((service, index)=>(
            <li key={index} className="bg-[#1f1f27] border border-[#2a2d38] p-5 rounded-xl transition-all duration-300 ease-in-out hover:scale-110 hover:bg-black">
                <span className="font-semibold text-xl">{service.title}</span>
                <p className="text-[#b5b7cb] mt-3">{service.description}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Services