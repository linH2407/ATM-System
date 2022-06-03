import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Menu from "./Menu";

const Acc = () => {
  const [user, setUser] = useState([]);
  const params = useParams();
  useEffect(() => {
    const id = params.id;
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      {/* <div className="flex justify-center">
        <div className="text-xl text-slate-700 ">
          <h1>Name </h1>
          <h1>Phone </h1>
        </div>
        <div className="text-xl ">
          <h1>: {user.accName}</h1>
          <h1>: {user.accPhone}</h1>
        </div>
      </div> */}

      <Outlet />
    </div>
  );
};

export default Acc;
