import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "autp", display: "block" }}
      ></img>
    </div>
  );
}
