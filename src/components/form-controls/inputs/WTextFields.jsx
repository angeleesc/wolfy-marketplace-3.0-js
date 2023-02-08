import React from "react";
import PropTypes from "prop-types";

export default function WTextFields({
  id,
  textLabel,
  info,
  errorMessage,
  register,
  warningMessage,
  type="text",
  ...props
}) {
  return (
    <div className="wolf-form-control">
      {textLabel && (
        <label  className="wolft-form-control-label mb-[5px]" htmlFor={id}>
          <span>{textLabel}</span>
        </label>
      )}
      <input id={id} type={type} className="wolf-form-control-text-input" {...props} {...register} />
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
