import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Button from "../components/molecules/Button";

const BalanceInquiry = () => {
  const [user, setUser] = useState([]);
  const params = useParams();

  const location = useLocation();
  useEffect(() => {
   const id = params.id;

    //const id = location.state.id.user.id;
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <div>
      <div className="flex justify-center mt-40 pt-20">
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
        {/* <div className="mt-10">
          <Button name="Gift Card Balance" />
          <Button name="Gift Cert. Balance" />
          <Button name="Gift Receipt Inquiry" />
          <Button name="Loyalty Balance" />
          <Button name="Store Credit Balance" />
        </div> */}
      </div>
      <div className="w-1/7  float-right">
        <Link to={`/account/${user.id}`}>
          <Button name="Back" />
        </Link>
      </div>
    </div>
  );
};

export default BalanceInquiry;
