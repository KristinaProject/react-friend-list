import React from "react";

// class Friends extends React.Component {
//   render() {
//     return (
//       <>
//         {this.props.friends.map((friend) => (
//           <div key={friend.id} className="card m-2 p-2" style={{ width: "18rem" }}>
//             <div className="card-body">
//               <h5 className="card-title">Name: {friend.name}</h5>
//               <h6 className="card-subtitle mb-2 text-muted">
//                 Surname: {friend.surname}
//               </h6>
//               <p className="card-text">
//                 Age: {friend.age} City: {friend.city}
//               </p>
//               <button className="btn btn-primary m-1">Edit</button>
//               <button className="btn btn-danger m-1">Delete</button>
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   }
// }

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: friendList,
    };
  }

  render() {
    return (
      <>
        <div className="container d-flex flex-wrap">
          {this.state.friends.map((friend) => (
            <div
              key={friend.id}
              className="card m-2 p-2"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">Name: {friend.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Surname: {friend.surname}
                </h6>
                <p className="card-text">
                  Age: {friend.age} City: {friend.city}
                </p>
                <button className="btn btn-primary m-1">Edit</button>
                <button className="btn btn-danger m-1">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const friendList = [
  { name: "Liza", surname: "Simpsons", age: 8, city: "Kaunas", id: 1 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 2 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 3 },
];

export { Container };
