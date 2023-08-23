import React from "react";

function Select(props) {
  let { options } = props;
  return (
    <div>
      <select className="mt-3" value={options.value}>
        {options.map((x, i) => (
          <option key={i}>{x}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
