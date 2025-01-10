import { useEffect, useState } from "react";
import { server } from "../server";

const imageFormats = ["jpeg", "jpg", "png", "gif"];
const videoFormats = ["mp4", "webm", "ogg"];
function MyWork() {
  const [data, setData] = useState([]);
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
  return (
    <div className="px-4 md:px-8 py-10 my-10">
      <span className="text-blue-600 mb-2 text-center md:text-left font-semibold block">My Work</span>
      <h1 className="font-semibold text-center md:text-left text-xl md:text-3xl">It&apos;s not just talk, checkout out my Work </h1>
      <ul className="flex gap-5 mt-5 flex-wrap pb-5">
            {data.length > 0 ? (
              data?.map((item) => {
                const mediaFormat = item?.imageUrl?.format;
                const isImage = imageFormats.includes(mediaFormat);
                const isVideo = videoFormats.includes(mediaFormat);
                return (
                  <li
                    key={item?._id}
                    className="bg-[#171825] border-[#2a2d38] max-h-[400px] w-[500px] p-5 rounded-xl flex-shrink-0"
                  >
                    {isVideo ? (
                      <video
                        className="max-h-[300px] max-w-[450px]"
                        src={item?.imageUrl?.secure_url}
                        controls
                        autoPlay
                        muted
                        loop
                      />
                    ) : isImage ? (
                      <img
                        className="max-h-[300px] max-w-[450px] object-cover"
                        src={item?.imageUrl?.secure_url}
                        alt={item?.title}
                      />
                    ) : (
                      <div>Unsupported format</div>
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
            ) : null}
          </ul>
    </div>
  )
}
export default MyWork