import React from "react";
import PropTypes from "prop-types";

export default function WTextFields({
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
        <label htmlFor={id}>
          <span className="wolft-form-control-label">{textLabel}</span>
        </label>
      )}
      <input id={id} type="text" className="wolf-form-control-text-input" />
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

WTextFields.prototype = {
  id: PropTypes.string.isRequired,
};
