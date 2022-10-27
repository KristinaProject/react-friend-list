export function Form(props) {
  return (
    <form className="containerAdd" onSubmit={(e) => props.handleSubmit(e)}>
      <label htmlFor="name">Name: </label>
      <input
        id="firstName"
        className="m-3 form-control"
        value={props.firstName}
        onChange={(e) => props.onChange(e)}
        type="text"
      ></input>
      <label htmlFor="surname">Surname: </label>
      <input
        id="lastName"
        className="m-3 form-control"
        value={props.lastName}
        onChange={(e) => props.onChange(e)}
        type="text"
      ></input>
      <label htmlFor="city">City: </label>
      <input
        id="city"
        className="m-3 form-control"
        value={props.city}
        onChange={(e) => props.onChange(e)}
        type="text"
      ></input>
      <label htmlFor="age">Age: </label>
      <input
        id="age"
        className="m-3 form-control"
        value={props.age}
        onChange={(e) => props.onChange(e)}
        type="numbers"
      ></input>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
