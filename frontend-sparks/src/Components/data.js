import React, { useEffect, useState } from "react";
import axios from "axios";
const Data = () => {
  const [user, setUser] = useState([]);
  const getdata = () => {
    axios.get("http://localhost:15000/users").then((res) => {
      console.log("result:", res.data);
      setUser(res.data);
      console.log("user here:", user);
    });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="table-responsive-md">
      <table className="table table-striped table-borderless table-hover">
        <thead className="thead-dark bg-dark text-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Account #</th>
            <th scope="col">Account Type</th>
            <th scope="col">Age</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Created_AT</th>
            <th scope="col">Updated_AT</th>
          </tr>
        </thead>
        <tbody className="mx-auto">
          {user.length > 0 ? (
            user.map((usr, _index) => {
            console.log("data now :", user[0].name,"ab :",usr);
            return(
            <tr>
                <th scope="row" key={_index}>{_index+1}</th>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr._id}</td>
                <td>{usr.accountType}</td>
                <td>{usr.age}</td>
                <td>{usr.amount}</td>
                <td>{usr.created_at}</td>
                <td>{usr.updated_at}</td>
              </tr>)
            })
          ) : (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
