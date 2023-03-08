import React, { useReducer } from "react";
import "./Calculator.css";
import Buttons from "./Buttons/Buttons";
import Header from "./Header/Header";
import Screen from "./Screen/Screen";
import actionTypes from "./actionsType";

const initState = {
  phrase: "",
  equalActive: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ISEQUAL:
      return {
        ...state,
        equalActive: action.equalActive,
        error: action.error,
      };
    case actionTypes.DELETE:
      return {
        ...state,
        error: "",
        equalActive: false,
        phrase: action.phrase,
      };
    case actionTypes.EXPRESSION:
      return {
        ...state,
        error: "",
        equalActive: false,
        phrase: action.phrase,
      };
    default:
      return {
        ...state,
        phrase: "",
        equalActive: false,
        error: "",
      };
  }
}

const Calculator = () => {
  const [{ phrase, equalActive, error }, dispatch] = useReducer(
    reducer,
    initState
  );
  return (
    <div className="calculator">
      {error.length > 0 ? (
        <ul className="error list-unstyled alert alert-danger mb-4">
          {<li>{error}</li>}
        </ul>
      ) : null}
      <Header />
      <Screen algebraicPhrase={equalActive && eval(phrase)} phrase={phrase} />
      <Buttons
        onEqual={handleEqual}
        onClear={handleClear}
        onExpression={handleExpression}
        onDelete={handleDelete}
      />
    </div>
  );
  function handleEqual() {
    try {
      const result = eval(phrase); // this line of code is just for handling error and
      //we don't need the result
      dispatch({
        type: actionTypes.ISEQUAL,
        equalActive: true,
        error: "",
      });
    } catch (e) {
      dispatch({
        type: actionTypes.ISEQUAL,
        equalActive: false,
        error: "your expression is uncorrect",
      });
    }
  }
  function handleClear() {
    dispatch({
      type: actionTypes.CLEAR,
    });
  }
  function handleExpression(expression) {
    const newPhrase = equalActive
      ? `${eval(phrase)}${expression}`
      : `${phrase}${expression}`;
    dispatch({
      type: actionTypes.EXPRESSION,
      phrase: newPhrase,
    });
  }
  function handleDelete() {
    const strPhrase = equalActive ? `${String(eval(phrase))}` : phrase;
    const newPhrase = equalActive
      ? strPhrase.slice(0, strPhrase.length - 1)
      : `${phrase.slice(0, phrase.length - 1)}`;
    dispatch({
      type: actionTypes.DELETE,
      phrase: newPhrase,
    });
  }
};

export default Calculator;
