import React from "react";
const ProgressBar = ({ progress, color ,title}) => {
  return (
    <div style={{ flex: 1, margin: "16px" }}>
      <div
        className="h2 font-weight-bold"
        style={{ fontSize: "1em", color: `${color}` }}
      ><span style={{ display: "flex",
      flexDirection: "row-reverse" ,color:"black"}}>{progress}%</span>
          {`${title}`}
        
      </div>
      <div className="progress">
        <div
          className="progress-bar rounded"
          style={{
            width: `${progress}%`,
            backgroundColor: color
          }}
          role="progressbar"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
