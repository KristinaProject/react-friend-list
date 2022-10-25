import React, { useState } from "react";

function Container() {
  const [friends, setFriend] = useState(friendList);

  function deleteClick(id) {
    setFriend(friends.filter((friend) => friend.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <>
      <div className="container d-flex flex-wrap">
        {friends.map((friend) => (
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
              <button
                className="btn btn-danger m-1"
                onClick={() => deleteClick(friend.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <form className="containerAdd" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" className="m-3 form-control" onChange={e => setFriend(e.target.value)}></input>
        <label htmlFor="surname">Surname: </label>
        <input id="surname" className="m-3 form-control" onChange={e => setFriend(e.target.value)}></input>
        <label htmlFor="city">City: </label>
        <input id="city" className="m-3 form-control" onChange={e => setFriend(e.target.value)}></input>
        <label htmlFor="age">Age: </label>
        <input id="age" className="m-3 form-control" onChange={e => setFriend(e.target.value)}></input>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
}

const friendList = [
  { name: "Liza", surname: "Simpsons", age: 8, city: "Kaunas", id: 1 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 2 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 3 },
];

export { Container };
