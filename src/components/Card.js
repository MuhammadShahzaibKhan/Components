import React from "react";

function Card(props) {
  let { name, id, age, institute, isActive } = props;
  return (
    <div>
      <h3>name: {name}</h3>
      <p>id: {id}</p>
      <p>age: {age}</p>
      <p>Institute: {institute}</p>
      <p>isActive: {isActive ? "yes" : "NO"}</p>
    </div>
  );
}

export default Card;
