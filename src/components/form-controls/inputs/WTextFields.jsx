import React from "react";

export default function WTextFields({
  register,
  labelText,
  info,
  errorMessage,
  warningMessage,
  ...props
}) {
  return (
    <div className="wolf-form-control">
      <label htmlFor="">
        <span className="wolft-form-control-label">Label</span>
        <input type="text" className="wolf-form-control-text-input" />
      </label>
      <p className="wolf-form-control-info">Info</p>
      <p className="wolf-form-control-error">Info</p>
      <p className="wolf-form-control-warrnig">Info</p>
    </div>
  );
}
