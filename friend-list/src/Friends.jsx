export function Friends(props) {

  return (
    <div key={props.friend.id} className="card m-2 p-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Name: {props.friend.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Surname: {props.friend.surname}
        </h6>
        <p className="card-text">
          Age: {props.friend.age} City: {props.friend.city}
        </p>
        <button
          type="button"
          className="btn btn-primary m-1"
          data-toggle="modal"
          data-target="#editModal"
          onClick={(e) => props.editValues(e, props.friend)}
        >
          Edit
        </button>
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
