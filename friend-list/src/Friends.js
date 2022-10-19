import React from "react";

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      age: "",
    };
  }

  render() {
    return (
      <>
        <div>
          <h5>Name: {this.state.name}</h5>
          <h6>Surname: {this.state.surname}</h6>
          <p>Age: {this.state.age}</p>
        </div>
      </>
    );
  }
}

const friendList = [
  { name: "Liza", surname: "Simpsons", age: 8, key: 1 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, key: 2 },
];

export { Friends };