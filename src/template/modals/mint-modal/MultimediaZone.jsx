import React from "react";

export default function MultimediaZone({ file }) {
  const { type } = file[0];
  const url = URL.createObjectURL(file[0]);

  if (type.indexOf("image") >= 0) {
    const url = URL.createObjectURL(file[0]);
    return (
      <div className="preview-box-container">
        <img src={url} alt="prewie-image" />
      </div>
    );
  }
  if (type.indexOf("video") >= 0) {
    return (
      <div className="preview-box-container">
        <video loop autoPlay muted>
          <source src={url} type={type}></source>
        </video>
      </div>
    );
  }
  return <h3>desconocido</h3>;
}
