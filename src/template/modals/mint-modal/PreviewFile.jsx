import React from "react";

export default function PreviewFile({ file }) {
  const { type } = file[0];
  const url = URL.createObjectURL(file[0]);

  // if()

  if (type.indexOf("image") >= 0) {
    return (
      <div className="modal-multimedia-zone">
        <img src={url} alt="nft-preview-file" />
      </div>
    );
  }

  return (
    <div>
      <h4>Archivo desconocido</h4>
    </div>
  );
}
