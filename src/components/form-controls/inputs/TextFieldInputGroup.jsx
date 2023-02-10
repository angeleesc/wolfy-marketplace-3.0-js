import React from "react";

export default function TextFieldInputGroup({
  id,
  textLabel,
  info,
  errorMessage,
  register,
  warningMessage,
  type = "text",
  ...props
}) {
  return (
    <div className="wolf-form-control">
      {textLabel && (
        <label className="wolft-form-control-label mb-[5px]" htmlFor={id}>
          <span>{textLabel}</span>
        </label>
      )}

      <input
        id={id}
        type={type}
        className="wolf-form-control-text-input"
        {...props}
        {...register}
      />

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
