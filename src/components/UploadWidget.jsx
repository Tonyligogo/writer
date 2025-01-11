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
        <button type="button" className="w-fit text-white border px-4 py-2 rounded-md" onClick={()=>widgetRef.current.open()}>Upload media</button>
    )
}
export default UploadWidget;
