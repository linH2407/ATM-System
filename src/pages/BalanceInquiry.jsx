import React from "react";
import { Link } from "react-router-dom";
import Button from "../molecules/Button";

const BalanceInquiry = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl mt-8 text-center">Balance Inquiry</h1>
        <div className="mt-10">
          <Button name="Gift Card Balance" />
          <Button name="Gift Cert. Balance" />
          <Button name="Gift Receipt Inquiry" />
          <Button name="Loyalty Balance" />
          <Button name="Store Credit Balance" />
        </div>
      </div>
    </div>
  );
};

export default BalanceInquiry;
