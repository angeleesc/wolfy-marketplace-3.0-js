import React, { useCallback, useMemo } from "react";
import "./file-drop-zone.scss";
import { useDropzone } from "react-dropzone";

export default function FileDropZone() {
  const onDrop = useCallback((files) => {
    console.log(files);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragActive,
    isDragAccept,
    isDragReject,
    open
  } = useDropzone({
    
    onDrop,
    noClick: true
  });

  const className = useMemo(() => {
    if (isFocused) return "wolf-dropzone on-focus relative";
    if (isDragActive) return "wolf-dropzone on-active relative";
    if (isDragAccept) return "wolf-dropzone on-drag-accept relative";
    if (isDragReject) return "wolf-dropzone on-drag-rejet relative";
    return "wolf-dropzone";
  });

  return (
    <div className="wolf-file-drop-zone">
      <div
        {...getRootProps({
          className,
  
        })}
      >
        <input {...getInputProps()} />
        <div className="input-content">
          <span className="text-[12px] info-header" >Arrastra y suelta el archivo aqui</span>
          <span className="info-content" >Archivos soportado PNG, JPG, WEBP, MP4 o MP3 maximo 100mb.</span>
          <button onClick={open} className="wolf-buttom wolf-buttom-primary-gradient max-w-[300px] mt-[12px]" >
            Elegir Archivo
          </button>
        </div>
      </div>
    </div>
  );
}
