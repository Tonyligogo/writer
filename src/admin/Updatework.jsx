/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import UploadWidget from "../components/UploadWidget";
import toast from "react-hot-toast";
import { server } from "../server";

function Updatework({onClose, work}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isCourse, setIsCourse] = useState(false);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState({
        public_id: "",
        secure_url: "",
        format: "",
      });
    useEffect(() => {
        if (work) {
            setTitle(work.title);
            setContent(work.content);
            setIsCourse(work.isCourse);
            setFile({
                public_id: work.imageUrl.public_id,
                secure_url: work.imageUrl.secure_url,
                format: work.imageUrl.format,
            });
        }
    }, [work]);

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
        setLoading(true);
        const data = {
          title,
          content,
          isCourse,
          imageUrl: file,
        };
        const response = await fetch(`${server}/writer/admin/update/work/${work._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        if (response.ok) {
          toast.success('Work updated successfully');
          onClose();
        }else{
          toast.error('Failed to update work. Please try again.');
          setLoading(false);
        }
      };
  return (
    <div className="mt-5">
        <div className="flex justify-between items-center">
      <h1 className="text-white text-2xl font-semibold">Update work</h1>
      <button type="button" onClick={()=>onClose()} className="text-lg border rounded-lg size-8 grid place-content-center">X</button>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            required
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
        <div className="flex items-center gap-2">
        <label htmlFor="course">
                Is this a Course?
            </label>
                <input
                id="course"
                    type="checkbox"
                    checked={isCourse}
                    onChange={(e)=>setIsCourse(e.target.checked)}
                />
            
        </div>
        <UploadWidget uploadedResults={handleUploadedFile} />
        <button disabled={loading} className="bg-blue-600 transition-all hover:bg-blue-800 w-fit text-white px-4 py-2 rounded-md">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default Updatework