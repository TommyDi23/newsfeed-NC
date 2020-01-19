import React from "react";

const ErrorDisplay = ({ err }) => {
  return (
    <h5>
      Error: this is an error {err.status} {err.msg}
    </h5>
  );
};

export default ErrorDisplay;
