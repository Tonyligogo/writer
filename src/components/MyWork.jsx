
function MyWork() {
  return (
    <div className="px-4 md:px-8 py-10 my-10">
      <span className="text-blue-600 mb-2 text-center md:text-left font-semibold block">My Work</span>
      <h1 className="font-semibold text-center md:text-left text-xl md:text-3xl">It&apos;s not just talk, checkout out my Work </h1>
      <ul className="flex gap-5 mt-5 overflow-x-auto pb-5">
        <li className="bg-[#171825] border-[#2a2d38] p-5 rounded-xl flex-shrink-0">
          <video className="h-[250px] w-[450px]" src="/work1.mp4" controls autoPlay muted loop></video>
          <span className="text-center text-lg underline font-semibold">Project Title</span>
          <p className="text-[#b5b7cb] font-semibold">Description</p>
        </li>
        <li className="bg-[#171825] border-[#2a2d38] p-5 rounded-xl flex-shrink-0">
          <video className="h-[250px] w-[450px]" src="/work1.mp4" controls autoPlay muted loop></video>
          <span className="text-center text-lg underline font-semibold">Project Title</span>
          <p className="text-[#b5b7cb] font-semibold">Description</p>
        </li>
        <li className="bg-[#171825] border-[#2a2d38] p-5 rounded-xl flex-shrink-0">
          <video className="h-[250px] w-[450px]" src="/work1.mp4" controls autoPlay muted loop></video>
          <span className="text-center text-lg underline font-semibold">Project Title</span>
          <p className="text-[#b5b7cb] font-semibold">Description</p>
        </li>
      </ul>
    </div>
  )
}
export default MyWork