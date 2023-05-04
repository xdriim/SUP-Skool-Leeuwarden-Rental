import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export const MultiStepProgressBar = (props) => {
  return (
    <ProgressBar
      percent={(props.step) * 50}
      filledBackground="#80ACE0"
      height="2px"
      style={{ margin: "auto" }}
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid #80ACE0",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#80ACE0" : '#DEEDFF'}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid #80ACE0",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#80ACE0" : '#DEEDFF'}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",

              border: "1px solid #80ACE0",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#80ACE0" : '#DEEDFF'}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

