import React from "react";

function UserComp(props) {
  let { id, name, username, email, phone } = props;
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          {" "}
          <p
            className="text-black "
            style={{ fontStyle: "italic" }}
            data-bs-toggle="modal"
            data-bs-target={"#" + username}
          >
            Click to view
          </p>
        </td>
      </tr>
    </>
  );
}

export default UserComp;
