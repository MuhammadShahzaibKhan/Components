import React from "react";

function Inputbox(props) {
  console.log(props)
  return (
    <div>
      <label>{props.label}</label>
      <br />
      <input type={props.type} placeholder={props.placeHolder}/>
    </div>
  );
}

export default Inputbox;
