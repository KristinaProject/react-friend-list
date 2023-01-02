var ReactDOM = require("react-dom");

export function EditModal(props) {
  if (!props.show) {
    return null;
  }

  return ReactDOM.createPortal(
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
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form className="editForm" onSubmit={props.handleSubmitEdit}>
            <div className="modal-body">
              <label htmlFor="name">Name: </label>
              <input
                className="form-control"
                onChange={props.onChangeEdit}
                type="text"
                value={props.data.name}
                name="name"
              ></input>
              <label htmlFor="surname">Surname: </label>
              <input
                name="surname"
                className="form-control"
                onChange={props.onChangeEdit}
                type="text"
                value={props.data.surname}
              ></input>
              <label htmlFor="city">City: </label>
              <input
                name="city"
                className="form-control"
                onChange={props.onChangeEdit}
                type="text"
                value={props.data.city}
              ></input>
              <label htmlFor="age">Age: </label>
              <input
                name="age"
                className="form-control"
                onChange={props.onChangeEdit}
                type="numbers"
                value={props.data.age}
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"

              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
