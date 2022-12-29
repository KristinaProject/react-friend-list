export function EditModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="editModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Change information about friend:
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.cancelEdit}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form
              className="editForm"
              onSubmit={(e) => props.handleSubmit(e)}
            >
              <label htmlFor="name">Name: </label>
              <input
                className="form-control"
                onChange={(e) => props.onChange(e)}
                type="text"
                value={props.data.name}
                name="name"
              ></input>
              <label htmlFor="surname">Surname: </label>
              <input
                name="surname"
                className="form-control"
                onChange={(e) => props.onChange(e)}
                type="text"
                value={props.data.surname}
              ></input>
              <label htmlFor="city">City: </label>
              <input
                name="city"
                className="form-control"
                onChange={(e) => props.onChange(e)}
                type="text"
                value={props.data.city}
              ></input>
              <label htmlFor="age">Age: </label>
              <input
                name="age"
                className="form-control"
                onChange={(e) => props.onChange(e)}
                type="numbers"
                value={props.data.age}
              ></input>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.cancelEdit}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
