import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../molecules/Button";
import BalanceInquiry from "../pages/BalanceInquiry";

const ListButton = ({show, setShow}) => {
  return (
    <div>
      {show && (
        <div className="mt-20 flex justify-between">
          <div>
            <Link onClick={() => setShow(false)} to="/account/balanceInquiry">
              <Button name="Balance Inquiry" />
            </Link>
            <Link to="/account/withdrawal">
              <Button name="Withdrawal" />
            </Link>
            <Button name="Transfer" />
          </div>
          <div>
            <Button name="Transactions" />
            <Button name="Change PIN" />
            <Button name="Other" />
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default ListButton;
