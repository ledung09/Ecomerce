import React from "react";
import "./bar.css";
const ProgressBar = (props) => {
  const { label, bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "60%",
    borderRadius: 50,
    margin: 50,
    alignItems: "center",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div className="container">
        <label className="label" htmlFor="searchId">
          {label}
        </label>
      </div>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
