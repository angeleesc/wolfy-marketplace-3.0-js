import React, { useCallback, useMemo } from "react";
import "./file-drop-zone.scss";
import { useDropzone } from "react-dropzone";
import { isImageFileRegEx, isVideoFileRegEx } from "../../../helpers/regEx";
import MultimediaZone from "./MultimediaZone";

export default function FileDropZone({ name, onChange, value, reset, error }) {
  const onDrop = useCallback((files) => {
    // console.log(files);
    onChange(files);
  }, []);

  console.log(value);

  // console.log(fileReader)

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
  });

  const className = useMemo(() => {
    if (isFocused) return "wolf-dropzone on-focus relative";
    if (isDragActive) return "wolf-dropzone on-active relative";
    if (isDragAccept) return "wolf-dropzone on-drag-accept relative";
    if (isDragReject) return "wolf-dropzone on-drag-rejet relative";
    return "wolf-dropzone";
  });

  let defType = null;

  return (
    <>
      <div className="wolf-file-drop-zone">
        <div
          {...getRootProps({
            className,
          })}
        >
          <input {...getInputProps()} />
          {value ? (
            <MultimediaZone value={value} reset={reset} name={name} />
          ) : (
            <div className="input-content">
              <span className="text-[12px] info-header">
                Arrastra y suelta el archivo aqui
              </span>
              <span className="info-content">
                Archivos soportado PNG, JPG, WEBP, MP4 o MP3 maximo 100mb.
              </span>
              <button
                type="button"
                onClick={open}
                className="wolf-buttom wolf-buttom-primary-gradient max-w-[300px] mt-[12px]"
              >
                Elegir Archivo
              </button>
            </div>
          )}
        </div>
      </div>
      {error && (
        <span className="error-message">este archivo es requerido</span>
      )}
    </>
  );
}
