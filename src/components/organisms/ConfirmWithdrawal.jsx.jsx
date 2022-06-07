import React from "react";
import { Link } from "react-router-dom";
import { updateBalance, createWithdraw } from "../../services/bankaccount";
import Button from "../molecules/Button";

const Amount = ({ user, money, fee }) => {
  const date = new Date();

  const amountRemaining = user.amount - fee - money;

  const handleWithdrawal = () => {
    updateBalance(user, amountRemaining);

    createWithdraw(user, amountRemaining, money, date);
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
              :{" "}
              {date.getDate() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getFullYear()}
            </h1>
            <h1>
              :{" "}
              {date.getHours() +
                ":" +
                date.getMinutes() +
                ":" +
                date.getSeconds()}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto flex justify-between mt-20 ">
        <div onClick={handleWithdrawal}>
          <Link to={`/account/${user.id}`}>
            <Button name="Withdrawal with bill" />
          </Link>
        </div>
        <div onClick={handleWithdrawal}>
          <Link to={`/account/${user.id}`}>
            <Button name="Withdrawal without bill" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Amount;
