import { useEffect, useState } from "react";
import { server } from "../server";
import AddWork from "./AddWork";

const imageFormats = ["jpeg", "jpg", "png", "gif"];
const videoFormats = ["mp4", "webm", "ogg"];

function Admin() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [addWork, setAddWork] = useState(false);

  useEffect(() => {
    fetch(`${server}/profile`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userInfo) => {
        console.log(userInfo);
      });
  }, []);

  useEffect(() => {
    async function fetchData() {
      await fetch(`${server}/writer/admin`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log(error)
          setError(true)
        });
    }
    fetchData();
  }, []);

  function logout() {
    fetch(`${server}/logout`, {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/";
  }

  return (
    <div className="h-screen bg-dark px-4 md:px-8 text-white">
      <nav className="py-3 flex justify-between items-center gap-5">
        <div className="w-[120px] md:w-[150px]">
          <h1 className="font-bold text-3xl mb-1 text-center">Writely</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1418 125"
            fill="#2563eb"
          >
            <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
          </svg>
        </div>
        <div>
        {!error && <button
          type="button"
          onClick={() => setAddWork((prev) => !prev)}
          className="border rounded-md px-4 py-2"
        >
          + Add your work
        </button>}
        <button type="button" className="ml-4" onClick={logout}>
          <svg
            fill="#fff"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384.971 384.971"
            xmlSpace="preserve"
          >
            <g>
              <g id="Sign_Out">
                <path
                  d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
			C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
			C192.485,366.299,187.095,360.91,180.455,360.91z"
                />
                <path
                  d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
			c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
			c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </g>
          </svg>
        </button>
        </div>
      </nav>
      {data && !addWork && !error && (
        <div>
          <h2 className="text-2xl font-semibold underline mb-5">
            All your works
          </h2>
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
            ) : (
              <p className="text-2xl mt-10">You do not have any work yet!</p>
            )}
          </ul>
        </div>
      )}
      {error && (
        <p className="text-2xl mt-10">
          {" "}
          <b>Oops!</b> Something went wrong when trying to fetch your work.
          Please try again later.{" "}
        </p>
      )}
      {addWork && <AddWork onClose={() => setAddWork(false)} />}
    </div>
  );
}

export default Admin;
