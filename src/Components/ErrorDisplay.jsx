import React from "react";

const ErrorDisplay = ({ err }) => {
  return (
    <p>
      Error: this is an error {err.status} {err.msg}
    </p>
  );
};

export default ErrorDisplay;
