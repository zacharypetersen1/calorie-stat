import React from "react";
import Button from "react-bootstrap/Button";
import { setDisplayMode } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";

export default function DisplayModeButton(props) {
  const curMode = useSelector((state) => state.cart.mode);
  const dispatch = useDispatch();

  return (
    <Button 
      variant={ curMode === props.mode ? "primary" : "secondary" }
      onClick={ (e) => dispatch(setDisplayMode(props.mode)) }
    >{props.mode}</Button>
  );
}
