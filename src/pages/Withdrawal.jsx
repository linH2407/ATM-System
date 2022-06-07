import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/molecules/Button";
import Amount from "../components/organisms/ConfirmWithdrawal.jsx.jsx";

const Withdrawal = () => {
  const [user, setUser] = useState([]);
  const [money, setMoney] = useState(0);
  const [fee, setFee] = useState(1100);


  const [inputAmount, setInputAmount] = useState();
  const [showInput, setShowInput] = useState(false);
  const [showBill, setShowBill] = useState(false);

  const params = useParams();

  const handleInputAmount = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (user.amount - value < 50000) {
      alert("Please enter a smaller amount available!!!");
    } else {
      setInputAmount(value);
      setMoney(value);
    }
  };
  const confirmAmount = () => {
    const threshold = user.amount - money - fee;
    if (threshold >= 50000) {
      setShowBill(true);
    } else {
      alert("please leave balance greater than 50000");
      setShowBill(false);
    }
  };
  useEffect(() => {
    const id = params.id;
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      {!showBill && (
        <div>
          <div className="w-1/2 mx-auto">
            <div className="flex justify-center pr-3">
              <div className="text-xl text-slate-700 ">
                <h1>Name </h1>
                <h1>Amount </h1>
                <h1>Amount withdrawal </h1>
              </div>
              <div className="text-xl ">
                <h1>: {user.accName}</h1>
                <h1>: {user.amount}</h1>
                <h1>: {money}</h1>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <div className="w-[168px]">
                <div onClick={() => setMoney(50000)}>
                  <Button name="50000" />
                </div>
                <div onClick={() => setMoney(200000)}>
                  <Button name="200000" />
                </div>
                <div onClick={() => setMoney(500000)}>
                  <Button name="500000" />
                </div>
              </div>
              <div>
                <div onClick={() => setMoney(2000000)}>
                  <Button name="2000000" />
                </div>
                <div onClick={() => setMoney(5000000)}>
                  <Button name="5000000" />
                </div>
                <div onClick={() => setShowInput(true)}>
                  <Button name="Other number" />
                </div>
              </div>
            </div>
            {showInput && (
              <div className="flex justify-between">
                <label class="w-full">
                  <input
                    type="text"
                    value={inputAmount}
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-slate-400 focus:ring-slate-400 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Please enter the amount to withdraw"
                    onChange={(e) => handleInputAmount(e)}
                  />
                </label>
              </div>
            )}
            <div className="mt-14" onClick={confirmAmount}>
              <Button name="Confirm" />
            </div>
          </div>
          <div className="w-1/7 mt-[60px] float-right">
            <Link to={`/account/${user.id}`}>
              <Button name="Back" />
            </Link>
          </div>
        </div>
      )}
      {showBill && <Amount user={user} money={money} fee={fee} />}
    </div>
  );
};

export default Withdrawal;
