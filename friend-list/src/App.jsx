import { useState } from "react";
import { Container } from "./Container";
import { EditModal } from "./EditModal";
import { Form } from "./Form";
import { Header } from "./Header";

const friendList = [
  { name: "Liza", surname: "Simpsons", age: 8, city: "Kaunas", id: 1 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 2 },
  { name: "Molis", surname: "Vidurzemis", age: 1000, city: "Zeme", id: 3 },
];

const initialValues = {
  firstName: "",
  lastName: "",
  age: "",
  city: "",
  id: "",
};

const randomID = () => Math.floor(Math.random() * 100);

export function App() {
  const [friends, setFriend] = useState(friendList);
  const [formSubmit, setFormSubmit] = useState(initialValues);
  const [show, setShow] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState(initialValues);

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
      id: randomID(),
    };

    setFriend([...friends, newFriend]);
    setFormSubmit([...initialValues]);
  };

  const onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    setFormSubmit({ ...formSubmit, [id]: value });
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  const editValues = (e, item) => {
    e.preventDefault();
    setShow(true);
    setEditId(item.id);

    const values = {
      name: item.name,
      surname: item.surname,
      age: item.age,
      city: item.city,
      id: item.id,
    };

    setEditForm(values);
  };

  const onChangeEdit = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditForm({...editForm, [name] : value})
  }
  
  const handleSubmitEdit = (e) => {
    e.preventDefault();

    const newFriend = {
      name: editForm.name,
      surname: editForm.surname,
      age: editForm.age,
      city: editForm.city,
      id: editForm.id,
    }

    const newData = [...friends];
    const index = friends.findIndex((item) => item.id === editId);
    newData[index] = newFriend;
    setFriend(newData);
    setEditId(null);
    setShow(false)
  } 

  return (
    <>
      <Header />
      <Container
        friends={friends}
        onClick={deleteClick}
        editValues={editValues}
      />
      <Form
        formSubmit={formSubmit}
        handleSubmit={handleSubmit}
        onChange={onChange}
      />
      <EditModal
        show={show}
        setShow={setShow}
        cancelEdit={cancelEdit}
        data={editForm}
        onChangeEdit={onChangeEdit}
        handleSubmitEdit={handleSubmitEdit}
      />
    </>
  );
}
