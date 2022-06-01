import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Button from "../components/molecules/Button";

const Withdrawal = () => {
  const [inputAmount, setInputAmount] = useState();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  const handleWithdraw = () => {};
  return (
    <div>
      <div className="w-1/2 mx-auto">
        {/* <h1 className="text-2xl mt-8 font-bold text-center">Withdrawal</h1> */}
        <p className="text-center text-xl text-slate-700">
          Amount: {user.amount}
        </p>
        <div className="flex justify-between mt-10">
          <div className="w-[168px]">
            <Button name="50.000" />
            <Button name="500.000" />
            <Button name="1.000.000" />
          </div>
          <div>
            <Button name="2.000.000" />
            <Button name="5.000.000" />
            <div onClick={() => setShow(true)}>
              <Button name="Other number" onClick={() => setShow(true)} />
            </div>
          </div>
        </div>
        {show && (
          <div className="flex gap-4 ">
            <label class="">
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
            <div className="">
              <Link to='amount'>
                <Button name="Confirm" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/7 mt-20  float-right">
        <Link to={`/account/${user.id}`}>
          <Button name="Back" />
        </Link>
      </div>
    </div>
  );
};

export default Withdrawal;
