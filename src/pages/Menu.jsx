import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../components/molecules/Button";

const Menu = () => {
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    //const id = location.state.id.user.id;
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <div className="mt-20 w-1/2 mx-auto">
        <div className="flex justify-center">
          <div className="text-xl text-slate-700 ">
            <h1>Name </h1>
            <h1>Phone </h1>
          </div>
          <div className="text-xl ">
            <h1>: {user.accName}</h1>
            <h1>: {user.accPhone}</h1>
          </div>
        </div>
        {/* <h1 className="text-4xl font-semibold mb-4">Profile</h1> */}
        <div className="mt-20 flex justify-between">
          <div>
            <Link
              state={{ from: "all user", id: { user } }}
              to={`/account/${user.id}/balance-inquiry`}
            >
              <Button name="Balance Inquiry" />
            </Link>
            <Link
              state={{ id: { user } }}
              to={
                user.amount <= 50000
                  ? `/account/${user.id}/balance-inquiry`
                  : `/account/${user.id}/withdrawal`
              }
            >
              <Button name="Withdrawal" />
            </Link>
            <Button name="Transfer" />
          </div>
          <div className="w-[168px]">
            <Button name="Transactions" />
            <Button name="Change PIN" />
            <Button name="Other" />
          </div>
        </div>
      </div>
      <div className="w-1/7 mt-44 float-right">
        <Link to="/">
          <Button name="Back" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
