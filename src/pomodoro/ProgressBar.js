import React from "react";

export default function ProgressBar({ progressBarIncrease }) {
  return (
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progressBarIncrease()} // Increase aria-valuenow as elapsed time increases
              style={{ width: `${progressBarIncrease()}%` }} // Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
  );
}
