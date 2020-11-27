import React from "react";

const ProcessBars = (props) => {
  console.log(props.data[0])
  // console.log(props.data[0]);
  // console.log(props.data[1]);
  return (
    <div className="vocabcard__processbar__progress">
      <div
        className="vocabcard__processbar__progress__bar"
        style={{ width: `${props.data[0] || 0}%` }}
        id={props.data[1]}
      ></div>
    </div>
  );
};

export default ProcessBars;
