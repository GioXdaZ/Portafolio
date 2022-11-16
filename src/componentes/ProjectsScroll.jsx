import "../App.css";
import React, { useRef } from "react";

export const ProjectsSroll = () => {
  const ref = useRef(null);

  return (
    <div className="sroll-container flex justify-center items-center">
      <ul ref={ref}>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
    </div>
  );
};
