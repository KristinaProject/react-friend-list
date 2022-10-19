import React from "react";

class Friends extends React.Component {
  render() {
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Name: {this.props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Surname: {this.props.surname}
            </h6>
            <p className="card-text">
              Age: {this.props.age}
              City: {this.props.city}
            </p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </>
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        {
          friend: friendList,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="container">
          {this.state.friends.map((friend) => (
            <Friends
              name={friend.name}
              surname={friend.surname}
              age={friend.age}
              city={friend.city}
              key={friend.id}
            />
          ))}
        </div>
      </>
    );
  }
}

const friendList = [
  { name: "Liza", surname: "Simpsons", age: 8, city: "Kaunas", id: 1 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 2 },
];

export { Container };
