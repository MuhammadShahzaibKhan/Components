import React from "react";

function Button(props) {
  let { name, click } = props;
  return (
    <div>
      <button className="btn btn-outline-info text-black" onClick={click}>
        {name}
      </button>
    </div>
  );
}

export default Button;
