import { useState } from "react";
import UploadWidget from "../components/UploadWidget";
import { server } from "../server";

function AddWork({onClose}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isCourse, setIsCourse] = useState(false);
  const [file, setFile] = useState({
    public_id: "",
    secure_url: "",
    format: "",
  });
  function handleUploadedFile(uploadedFile) {
    if (
        uploadedFile &&
        uploadedFile.info &&
        Array.isArray(uploadedFile.info.files) &&
        uploadedFile.info.files.length > 0
    ) {
        const uploadInfo = uploadedFile.info.files[0]?.uploadInfo;
        if (uploadInfo) {
            const { public_id, secure_url, format } = uploadInfo;
            setFile((prevFile) => ({
                ...prevFile,
                public_id,
                secure_url,
                format
            }));
        }
    } else {
        return;
    }
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      content,
      isCourse,
      imageUrl: file,
    };
    const response = await fetch(`${server}/writer/admin/work`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    if (!response.ok) {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="mt-5">
        <div className="flex justify-between items-center">
      <h1 className="text-white text-2xl font-semibold">Add your work </h1>
      <button type="button" onClick={()=>onClose()} className="text-lg border rounded-lg size-8 grid place-content-center">X</button>
        </div>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-[#b5b7cb] text-[#b5b7cb] rounded-md p-2 bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="content">Description</label>
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-[#b5b7cb] text-[#b5b7cb] rounded-md p-2 bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="course">Title</label>
          <input
            type="radio"
            id="course"
            value="true"
            checked={isCourse === true}
            onChange={(e)=>setIsCourse(e.target.value === 'true')}
            className="border border-[#b5b7cb] text-[#b5b7cb] rounded-md p-2 bg-transparent"
          />
        </div>
        <UploadWidget uploadedResults={handleUploadedFile} />
        <button className="bg-blue-600 transition-all hover:bg-blue-800 w-fit text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddWork;
