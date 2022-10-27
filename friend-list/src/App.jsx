import { useState } from "react";
import { Container } from "./Container";
import { Form } from "./Form";
import { Header } from "./Header";

const friendList = [
  { name: "Liza", surname: "Simpsons", age: 8, city: "Kaunas", id: 1 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 2 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 3 },
];

const initialValues = { firstName: "", lastName: "", age: "", city: "" };

export function App() {
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
      <Header />
      <Container friends={friends} onClick={deleteClick} />
      <Form formSubmit={formSubmit} handleSubmit={handleSubmit} onChange={onChange}/>
    </>
  );
}
