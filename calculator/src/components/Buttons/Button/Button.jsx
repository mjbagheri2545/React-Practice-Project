import React from "react";
import "./Button.css";

const Button = ({ classNames, mark, handleOnClick }) => {
  return (
    <>
      <button
        onClick={() => {
          handleOnClick(mark);
        }}
        className={`button flex-center fs-5 ${classNames}`}
      >
        {mark}
      </button>
    </>
  );
};

export default Button;
