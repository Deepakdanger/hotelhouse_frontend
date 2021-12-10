import React from 'react';
import { useSelector } from 'react-redux';

const ErrorAlert = () => {
  const { errormessage } = useSelector((state) => state);
  return (
    <div className="alert_page">
      <div className="InfoBanner">
        <span className="reversed reversedRight">
          <span>
            &#9888;
          </span>
        </span>
        <span className="reversed reversedLeft">
          Warning i m an evil error message !!
          {errormessage}
        </span>
      </div>
    </div>
  );
};

export default ErrorAlert;
