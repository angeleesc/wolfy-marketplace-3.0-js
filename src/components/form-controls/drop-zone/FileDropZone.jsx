import React, { useCallback } from "react";
import "./file-drop-zone.scss"
import { useDropzone } from "react-dropzone";

export default function FileDropZone() {

const onDrop = useCallback((files)=>{
  console.log(files)
},[])


  const  { getRootProps, getInputProps } = useDropzone({onDrop})

  return (
    <div className="wolf-file-drop-zone">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}
