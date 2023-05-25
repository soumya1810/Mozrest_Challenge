import React from "react";

function ModalComp(props) {
  return (
    <div
      className="modal fade"
      id={props.username}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-warning text-light">
            <h3 className="modal-title fs-5 " id="exampleModalLabel">
              Address
            </h3>
            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <strong>Address:</strong> {props.phone}
            <p></p>
            <strong> Geographical Cordinates:</strong> {props.geo}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComp;
