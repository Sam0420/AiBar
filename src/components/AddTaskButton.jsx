import React, {} from "react";
import "./AddTaskButton.css"; // ✅ Importing as CSS Module

const AddTaskButton = ({ as: Tag = "button", children, filled, secondary, ...rest }) => {
  return (
    <Tag
      className={`dir-control ${secondary ? "dir-control--secondary" : ""} ${filled ? "dir-control--filled" : ""}`}
      {...rest}
    >
      {children}
      <span />
      <span />
      <span />
      <span />
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </Tag>
  );
};

AddTaskButton.defaultProps = {
  as: "button"
  
};

export default AddTaskButton;