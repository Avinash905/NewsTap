import React from "react";
import spinner from "./spinner.gif";

export default function Loading() {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <img
          src={spinner}
          alt="loading"
          style={{ width: "3%" }}
          className="my-4"
        />
      </div>
    </>
  );
}
