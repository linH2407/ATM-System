import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/molecules/Button";

const BalanceInquiry = () => {
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
      <div>
      <p className="text-center text-xl text-slate-700">
        Amount: {user.amount}
      </p>
        <div className="mt-10">
          <Button name="Gift Card Balance" />
          <Button name="Gift Cert. Balance" />
          <Button name="Gift Receipt Inquiry" />
          <Button name="Loyalty Balance" />
          <Button name="Store Credit Balance" />
        </div>
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
