import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
    console.log(data);
  }, [data]);
  return (
    <div>
      {users.map((val) => {
        return (
          <div>
            <h2>
              {val.id}. Name: {val.firstName}
              {val.lastName}
            </h2>
            <ul>
              <li>
                <p>Email: {val.email}</p>
              </li>
              <li>
                <p>Gender: {val.gender}</p>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default GetUsers;
