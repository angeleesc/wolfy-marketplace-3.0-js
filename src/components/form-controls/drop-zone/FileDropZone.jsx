import React, { useCallback, useMemo } from "react";
import "./file-drop-zone.scss";
import { useDropzone } from "react-dropzone";
import {
  isImageFileRegEx,
  isImageFormatCompatible,
  isVideoFileRegEx,
} from "../../../helpers/regEx";
import MultimediaZone from "./MultimediaZone";

export default function FileDropZone({ name, onChange, value, reset, error }) {
  const onDrop = useCallback((files) => {
    // console.log(files);
    onChange(files);
  }, []);

  console.log(value);

  // console.log(fileReader)

  const fileValidator = (file) => {
    console.log("archivo a evaluar ");

    console.log(file.path);
    console.log(file.size);

    const isImageFormatCompatible = /(jpg|png|jpeg|webp|avif|svg|gif)/g;
    const isVideoFormatCompactible = /(webm|mp4|)/g;

    if (!isImageFormatCompatible.test(file.path)) {
      if (isVideoFormatCompactible) {
        console.log("evaluando video");
        return {
          code: "formato-incopatible",
          message: "el formato de video todavia no lo podemos prosesar",
        };
      }

      console.log("no es un formato compatible");
      return {
        code: "formato-incopatible",
        message: "el formato no es compatible para hacer una metadata",
      };
    }

    // 100000000
    // 6070189
    console.log("es un formato compatible XD");
    return null;
  };

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragActive,
    isDragAccept,
    isDragReject,
    fileRejections,
    open,
  } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    validator: fileValidator,
  });

  console.log("archivos rechazados");
  console.log(fileRejections);

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
          {value && value.length > 0 ? (
            <MultimediaZone value={value} reset={reset} name={name} />
          ) : (
            <div className="input-content">
              <span className="text-[12px] info-header">
                Arrastra y suelta el archivo aqui
              </span>
              <span className="info-content text-center">
                Archivos soportado PNG, JPG, WEBP, MP4 o MP3 maximo 100mb. nota
                no estamos prosesando archivo de videos hasta la siguente
                vesrsion
              </span>
              {fileRejections &&
                fileRejections.length > 0 &&
                fileRejections.map(({ errors, file }, i) => {
                  return (
                    <div key={"error-de-archivo-" + i} className="mt-2">
                      {errors && errors.length > 0 && (
                        <h3 className="text-wollf-red-200 text-center">
                          {errors[0].message}
                        </h3>
                      )}
                    </div>
                  );
                })}
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
