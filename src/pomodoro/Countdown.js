import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

export default function Countdown({ session, focusDuration, breakDuration }) {
  return (
    <>
      {/* This area should show only when there is an active focus or break - 
      i.e. the session is running or is paused */}
      <div className="row mb-2">
        {session ? (
          <div className="col">
            {/* Update message below to include current session 
            (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for{" "}
              {minutesToDuration(
                session.label === "On Break" ? breakDuration : focusDuration
              )}{" "}
              minutes
            </h2>
            {/* Update message below correctly format the time 
            remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}
