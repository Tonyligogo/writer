import { useEffect, useRef } from "react";

const UploadWidget = ({uploadedResults}) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        const onFileUpload = (result) => {
            uploadedResults(result); 
        }
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: 'ds4ku6ajx',
                uploadPreset: 'hvadwyuwid',
                folder:'writer'
            },
            (error, result) => {
                onFileUpload(result)
            }
        );
    },[])
    return(
        <button type="button" className="bg-blue-600 transition-all hover:bg-blue-800 w-fit text-white px-4 py-2 rounded-md" onClick={()=>widgetRef.current.open()}>Upload</button>
    )
}
export default UploadWidget;
