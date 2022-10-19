import React from "react";

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      surname: '',
      age: '',
    }
  }
}

const friendList = [
  {name: 'Liza', surname: 'Simpsons', age: 8, key:1},
  {name: 'Molis', surname: 'Vidurzemis', age: 1000, key: 2}
]