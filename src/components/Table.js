import React from "react";

function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {props.thead.map((x, i) => (
              <th key={i}>{x.head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.tbody.map((x, i) => (
            <tr key={i}>
              {props.thead.map((j, k) => (
                <td key={k}>{x[j.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
