import React, { useState } from "react";

const friendList = [
  { name: "Liza", surname: "Simpsons", age: 8, city: "Kaunas", id: 1 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 2 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 3 },
];

const initialValues = { firstName: "", lastName: "", age: "", city: "" };

function Container() {
  const [friends, setFriend] = useState(friendList);
  const [formSubmit, setFormSubmit] = useState(initialValues);

  const deleteClick = (id) => {
    setFriend(friends.filter((friend) => friend.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      name: formSubmit.firstName,
      surname: formSubmit.lastName,
      city: formSubmit.city,
      age: formSubmit.age,
      id: Math.floor(Math.random() * 100),
    };

    setFriend([...friends, newFriend]);
    setFormSubmit(initialValues);
  };

  const onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setFormSubmit({ ...formSubmit, [id]: value });
  };

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
                Surname: {friend.surname} id: {friend.id}
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
        <input
          id="firstName"
          className="m-3 form-control"
          value={formSubmit.firstName}
          onChange={onChange}
          type="text"
        ></input>
        <label htmlFor="surname">Surname: </label>
        <input
          id="lastName"
          className="m-3 form-control"
          value={formSubmit.lastName}
          onChange={onChange}
          type="text"
        ></input>
        <label htmlFor="city">City: </label>
        <input
          id="city"
          className="m-3 form-control"
          value={formSubmit.city}
          onChange={onChange}
          type="text"
        ></input>
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          className="m-3 form-control"
          value={formSubmit.age}
          onChange={onChange}
          type="numbers"
        ></input>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
}

export { Container };
