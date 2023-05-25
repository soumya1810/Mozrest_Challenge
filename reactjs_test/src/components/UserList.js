import React from "react";
import { useState, useEffect } from "react";
import UserComp from "./UserComp";
import ModalComp from "./ModalComp";

function UserList(props) {
  const [ulist, setUlist] = useState([]);

  const API = "https://jsonplaceholder.typicode.com/users";
  const fetchDetails = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUlist(res);
      });
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <table className="table table-striped table-bordered mt-3 rounded">
        <thead className=" text-light bg-warning">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {ulist?.map((comp) => {
            return (
              <UserComp
                key={comp.id}
                id={comp.id}
                name={comp.name}
                username={comp.username}
                email={comp.email}
                phone={comp.phone}
              />
            );
          })}
        </tbody>
      </table>
      {ulist?.map((element) => {
        return (
          <ModalComp
            key={element.id}
            username={element.username}
            phone={
              element.address.street +
              ", " +
              element.address.suite +
              ", " +
              element.address.city +
              " - " +
              element.address.zipcode
            }
            geo={
              element.address.geo.lat +
              "(latitude), " +
              element.address.geo.lng +
              "(longitude)"
            }
          />
        );
      })}
    </>
  );
}

export default UserList;
