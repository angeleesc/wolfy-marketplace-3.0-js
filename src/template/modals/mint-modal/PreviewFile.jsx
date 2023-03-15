import { CircularProgress } from "@mui/material";
import React from "react";

export default function PreviewFile({ file, percent = 50 }) {
  const { type } = file[0];
  const url = URL.createObjectURL(file[0]);

  // if()

  if (type.indexOf("image") >= 0) {
    return (
      <div className="modal-multimedia-zone">
        <img src={url} alt="nft-preview-file" />
        <div className="progres-zone">
          <CircularProgress
            sx={{
              color: "#3B43DD",
              borderRadius: "50%",
              backgroundColor: "#13161a",
            }}
            size={120}
            value={percent}
            variant="determinate"
          />
        </div>
      </div>
    );
  }

  if (type.indexOf("video") >= 0) {
    return (
      <div className="modal-multimedia-zone">
        <video loop autoPlay muted>
          <source src={URL.createObjectURL(file[0])} type={type}></source>
        </video>
      </div>
    );
  }

  return (
    <div>
      <h4>Archivo desconocido</h4>
    </div>
  );
}
