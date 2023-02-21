import React from "react";

export default function TextFieldInputGroup({
  id,
  textLabel,
  info,
  errorMessage,
  register,
  warningMessage,
  type = "text",
  leftChild,
  rightChild,
  ...props
}) {
  return (
    <div className="wolf-form-control">
      {textLabel && (
        <label className="wolft-form-control-label mb-[5px]" htmlFor={id}>
          <span>{textLabel}</span>
        </label>
      )}

      <div className="wolf-input-group">
        <div className="box-element-right">

        </div>
        <input
          id={id}
          type={type}
          className="wolf-form-control-text-input"
          {...props}
          {...register}
          
        />
        <div className="box-element-leff" ></div>
      </div>

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
