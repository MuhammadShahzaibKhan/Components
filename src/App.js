import "./App.css";
import Inputbox from "./components/inputbox";
import Button from "./components/Button";
import Select from "./components/Select";
import Card from "./components/Card";
import Table from "./components/Table";

function App() {
  // Button Component //

  let clicked = () => {
    alert("You clicked");
  };

  // Select Component //

  let options = ["Samsung", "Iphone", "Oppo", "Vivo"];

  // Card Component //

  let card = [
    {
      id: 1,
      name: "Shahzaib",
      age: "22",
      institute: "Jawan Pakistan",
      isActive: true,
    },
    {
      id: 2,
      name: "Ammad",
      age: "24",
      institute: "Jawan Pakistan",
      isActive: false,
    },
    {
      id: 3,
      name: "Hassan",
      age: "25",
      institute: "Jawan Pakistan",
      isActive: false,
    },
  ];

  // Table Component //

  let theadObj = [
    {
      key: "name",
      head: "NAME",
    },
    {
      key: "age",
      head: "AGE",
    },
    {
      key: "id",
      head: "ID",
    },
    {
      key: "institute",
      head: "INSTITUTE",
    },
  ];

  let tbodyObj = [
    {
      name: "Shahzaib",
      age: 22,
      id: "JP-1",
      institute: "Jawab Pakistan",
    },
    {
      name: "Ammad",
      age: 24,
      id: "JP-2",
      institute: "Jawab Pakistan",
    },
    {
      name: "Shahmeer",
      age: 25,
      id: "JP-3",
      institute: "Jawab Pakistan",
    },
    {
      name: "Hassan",
      age: 23,
      id: "JP-4",
      institute: "Jawab Pakistan",
    },
  ];

  return (
    <>
      {/* Input Component  */}

      <div className="inp-comp">
        <h1>Input Component</h1>
        <br />
        <Inputbox placeHolder="Enter your text" type="text" label="User Name" />
      </div>

      {/* Button Component */}

      <div className="btn-comp mt-5">
        <h1 className="mb-3">Button Component</h1>
        <Button name="Click me" click={clicked} />
      </div>

      {/* Select Component */}

      <h1 className="mt-5">Select Component</h1>
      <Select options={options} />

      {/* Card Component */}

      <h1 className="my-4">Card Component</h1>
      {card.map((x, i) => {
        return (
          <div key={i}>
            <Card
              id={x.id}
              name={x.name}
              age={x.age}
              institute={x.institute}
              isActive={x.isActive}
            />
          </div>
        );
      })}

      {/* Table Component */}

      <h1 className="my-4">Table Component</h1>
      <Table thead={theadObj} tbody={tbodyObj} />
    </>
  );
}

export default App;
