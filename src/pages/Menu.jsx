import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../molecules/Button";
import ListButton from "../origanisms/ListButton";

const Menu = () => {
  const [show, setShow] = useState(true);

  const [name, setName] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");

  return (
    <div className="mt-20 w-1/2 mx-auto">
      {/* <h1 className="text-4xl font-semibold mb-4">Profile</h1> */}
      {show && (
        <div>
          <div className="flex justify-center">
            <div className="text-xl text-slate-700 ">
              <h1>Name </h1>
              <h1>Account number </h1>
              <h1>Phone </h1>
              <h1>Pin </h1>
            </div>
            <div className="text-xl ">
              <h1>: {name}</h1>
              <h1>: {accNumber}</h1>
              <h1>: {phone}</h1>
              <h1>: {pin}</h1>
            </div>
          </div>
          <div className="mt-20 flex justify-between">
            <div>
              <Link onClick={() => setShow(false)} to="/account/balanceInquiry">
                <Button name="Balance Inquiry" />
              </Link>
              <Link onClick={() => setShow(false)} to="/account/withdrawal">
                <Button name="Withdrawal" />
              </Link>
              <Button name="Transfer" />
            </div>
            <div>
              <Button name="Transactions" width='168px'/>
              <Button name="Change PIN" />
              <Button name="Other" />
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Menu;
