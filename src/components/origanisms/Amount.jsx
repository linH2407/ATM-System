import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../molecules/Button";

const Amount = ({ money, fee }) => {
  const [user, setUser] = useState([]);
  
  const params = useParams();
  const date = new Date();
  useEffect(() => {
    const id = params.id;
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  const amountRemaining = user.amount - fee - money;

  const handleUpdateAmount = () => {
   
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amountRemaining }),
    }).then((response) => response.json());

    const data = {
      accNumber: user.accNumber,
      amountWithdrawal: money,
      amountRemaining: amountRemaining,
      date: date,
    }
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${user.id}/withdrawal`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
    // alert("Success");
  };
  return (
    <div>
      <div className="mx-auto">
        <div className="flex justify-center pr-9">
          <div className="text-xl text-slate-700 ">
            <h1 className="text-2xl mt-8 font-bold ">Bill</h1>
            <h1>Name </h1>
            <h1>Account number</h1>
            <h1>Amount remaining</h1>
            <h1>Amount withdrawal</h1>
            <h1>Fee</h1>
            <h1>Date</h1>
            <h1>Time</h1>
          </div>
          <div className="text-xl ">
            <h1 className="text-2xl mt-8 font-bold text-white">Bill</h1>
            <h1>: {user.accName}</h1>
            <h1>: {user.accNumber}</h1>
            <h1>: {amountRemaining}$</h1>
            <h1>: {money}$</h1>
            <h1>: {fee}</h1>
            <h1>
              : {date.getDate() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getFullYear()}
            </h1>
            <h1>
              : {date.getHours() +
                ":" +
                date.getMinutes() +
                ":" +
                date.getSeconds()}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto flex justify-between mt-20 ">
        <div onClick={handleUpdateAmount}>
          <Link to="/">
            <Button name="Withdrawal with bill" />
          </Link>
        </div>
        <div onClick={handleUpdateAmount}>
          <Link to="/">
            <Button name="Withdrawal without bill" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Amount;
