import React from "react";

const HeadSection = ({ title, children }) => {
  return (
    <div className="head_section">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};

export default HeadSection;
