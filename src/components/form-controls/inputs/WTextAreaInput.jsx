import React from "react";

export default function WTextAreaInput({
  id,
  register,
  textLabel,
  info,
  errorMessage,
  warningMessage,
  ...props
}) {
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
        className="wolf-form-control-text-input"
        {...props}
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
