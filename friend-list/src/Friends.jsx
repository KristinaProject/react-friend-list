export function Friends(props) {
  return (
    <div key={props.id} className="card m-2 p-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Surname: {props.surname}
        </h6>
        <p className="card-text">
          Age: {props.age} City: {props.city}
        </p>
        <button className="btn btn-primary m-1">Edit</button>
        <button
          className="btn btn-danger m-1"
          onClick={() => props.deleteClick(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
