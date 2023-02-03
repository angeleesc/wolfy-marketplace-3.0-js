import React, { useEffect, useRef, useState } from "react";

export default function WTextAreaInput({
  id,
  register,
  textLabel,
  info,
  errorMessage,
  warningMessage,
  ...props
}) {
  const [value, setValue] = useState();

  const textAreaRef = useRef();

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [value]);

  return (
    <div className="wolf-form-control">
      {textLabel && (
        <label className="wolft-form-control-label mb-[5px]" htmlFor={id}>
          <span>{textLabel}</span>
        </label>
      )}

      <textarea
        id={id}
        type="text"
        className="wolf-form-control-text-input text-arear"
        {...props}
        ref={textAreaRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>

      {info && <p className="wolf-form-control-info">{info}</p>}
      {errorMessage && (
        <p className="wolf-form-control-error">{errorMessage}</p>
      )}
      {warningMessage && (
        <p className="wolf-form-control-warrnig">{warningMessage}</p>
      )}
    </div>
  );
}
