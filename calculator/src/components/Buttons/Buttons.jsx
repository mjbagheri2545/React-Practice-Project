import React from "react";
import Button from "./Button/Button";
import buttonsData from "./buttonsData"
import buttonTypes from "./buttonTypes";

const Buttons = ({onEqual,onClear,onExpression,onDelete}) => {
  return (
    <div className="d-flex gap-2 flex-wrap">
        {
            buttonsData.map((button)=>{
              const keyId = crypto.randomUUID();
                return (
                    <Button handleOnClick={buttonTypeDetector(button.type)} key={keyId} mark={button.mark} classNames={button.className} />
                )
            })
        }
    </div>
  );
  function buttonTypeDetector(type) {
    switch (type) {
      case buttonTypes.DELETE: 
      return onDelete;
      case buttonTypes.CLEAR:
        return onClear;
      case buttonTypes.EQUAL:
        return onEqual;
      default:
        return onExpression;
    }
  }
};

export default Buttons;
