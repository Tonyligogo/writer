import { useEffect, useState } from "react";
import { server } from "../server";

const imageFormats = ["jpeg", "jpg", "png", "gif"];
const videoFormats = ["mp4", "webm", "ogg"];
function MyWork() {
  const [data, setData] = useState([]);
  const [coursesActive, setCoursesActive] = useState('courses');
    useEffect(() => {
      async function fetchData() {
        await fetch(`${server}/writer/admin`)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
      }
      fetchData();
    }, []);
    const courses = data?.filter(item => item.isCourse);
const subjects = data?.filter(item => !item.isCourse);
  return (
    <div className="px-4 md:px-8 md:py-10 my-10">
      <span className="text-blue-600 text-center md:text-left mb-2 font-semibold block">My Work</span>
      <h1 className="font-bold text-center md:text-left text-3xl">Talk is Cheap<br className="md:hidden"/> <span className='hidden md:inline-block'>-</span> Here&apos;s My Work </h1>
      <div className="bg-[#1f1f27] border border-[#2a2d38] w-fit flex gap-2 p-1 rounded-md mt-4">
        <button onClick={()=>setCoursesActive('courses')} className={`${coursesActive === 'courses' ? 'bg-dark' : ''} px-2 py-1 rounded-md`}>Courses</button>
        <button onClick={()=>setCoursesActive('subjects')} className={`${coursesActive === 'subjects' ? 'bg-dark' : ''} px-2 py-1 rounded-md`}>Subjects</button>
      </div>
      {coursesActive === 'courses' ?
      (<ul className="flex gap-5 mt-5 flex-wrap pb-5">
            {courses.length > 0 ? (
              courses?.map((item) => {
                const mediaFormat = item?.imageUrl?.format;
                const isImage = imageFormats.includes(mediaFormat);
                const isVideo = videoFormats.includes(mediaFormat);
                return (
                  <li
                    key={item?._id}
                    className="bg-[#171825] border-[#2a2d38] max-h-[400px] w-full max-w-[400px] p-3 rounded-xl flex-shrink-0"
                  >
                    {isVideo ? (
                      <video
                        className="max-h-[300px] w-full"
                        src={item?.imageUrl?.secure_url}
                        controls
                        autoPlay
                        muted
                        loop
                      />
                    ) : isImage ? (
                      <img
                        className="max-h-[225px] rounded-lg w-full object-cover"
                        src={item?.imageUrl?.secure_url}
                        alt={item?.title}
                      />
                    ) : (
                      <div>Unsupported media format</div>
                    )}
                    <div>
                      <span className="text-center text-lg underline font-semibold">
                        {item?.title}
                      </span>
                      <p className="text-[#b5b7cb] font-semibold">
                        {item?.content}
                      </p>
                    </div>
                  </li>
                );
              })
            ) : <p>Oops! There&apos;s nothing here.</p> }
          </ul>)
          :
      (<ul className="flex gap-5 mt-5 flex-wrap pb-5">
            {subjects.length > 0 ? (
              subjects?.map((item) => {
                const mediaFormat = item?.imageUrl?.format;
                const isImage = imageFormats.includes(mediaFormat);
                const isVideo = videoFormats.includes(mediaFormat);
                return (
                  <li
                    key={item?._id}
                    className="bg-[#171825] border-[#2a2d38] max-h-[400px] w-full max-w-[400px] p-3 rounded-xl flex-shrink-0"
                  >
                    {isVideo ? (
                      <video
                        className="max-h-[300px] w-full"
                        src={item?.imageUrl?.secure_url}
                        controls
                        autoPlay
                        muted
                        loop
                      />
                    ) : isImage ? (
                      <img
                        className="max-h-[225px] rounded-lg w-full object-cover"
                        src={item?.imageUrl?.secure_url}
                        alt={item?.title}
                      />
                    ) : (
                      <div>Unsupported media format</div>
                    )}
                    <div>
                      <span className="text-center text-lg underline font-semibold">
                        {item?.title}
                      </span>
                      <p className="text-[#b5b7cb] font-semibold">
                        {item?.content}
                      </p>
                    </div>
                  </li>
                );
              })
            ) : <p>Oops! There&apos;s nothing here.</p> }
          </ul>
          )

       }
    </div>
  )
}
export default MyWork