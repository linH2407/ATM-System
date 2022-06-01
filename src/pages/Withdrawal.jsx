import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../components/molecules/Button";

const Withdrawal = () => {
  const [inputAmount, setInputAmount] = useState();

  const [user, setUser] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const id = location.state.id.user.id;
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  const handleWithdraw = () => {

  };
  return (
    <div>
      <h1 className="text-2xl mt-8 font-bold text-center">Withdrawal</h1>
      <p className="text-center">Amount: {user.amount}</p>
      <div className="flex justify-between mt-10">
        <div className="w-[168px]">
          <Button name="50.000" />
          <Button name="500.000" />
          <Button name="1.000.000" />
        </div>
        <div>
          <Button name="2.000.000" />
          <Button name="5.000.000" />
          <Link to="/">
            <Button name="Other number" />
          </Link>
        </div>
      </div>
      <div>
        <label class="block">
          {/* <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span> */}
          <input
            type="number"
            value={inputAmount}
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-slate-400 focus:ring-slate-400 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Please enter the amount to withdraw"
          />
        </label>
      </div>
      <div className="mt-44 pt-10">
        <Button name="Withdraw" />
      </div>
    </div>
  );
};

export default Withdrawal;
