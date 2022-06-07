import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/molecules/Button";
import { getUser } from "../services/bankaccount";

const BalanceInquiry = () => {
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    getUser(id).then((data) => setUser(data));
  }, []);
  return (
    <div>
      <div>
        <div className="flex justify-center ">
          <div className="text-xl text-slate-700 ">
            <h1>Name </h1>
            <h1>Phone </h1>
            <h1>Amount</h1>
          </div>
          <div className="text-xl ">
            <h1>: {user.accName}</h1>
            <h1>: {user.accPhone}</h1>
            <h1>: {user.amount}</h1>
          </div>
        </div>
      </div>
      <div className="w-1/7 mt-40 pt-[284px] float-right">
        <Link to={`/account/${user.id}`}>
          <Button name="Back" />
        </Link>
      </div>
    </div>
  );
};

export default BalanceInquiry;
