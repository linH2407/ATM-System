import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../molecules/Button";

const Withdrawal = () => {
  const [input, setInput] = useState(false);
  return (
    <div>
      <h1 className="text-2xl mt-8 font-bold text-center">Withdrawal</h1>
      <div className="flex justify-between mt-10">
        <div>
          <Button name="50.000" width='168px'/>
          <Button name="500.000" />
          <Button name="1.000.000" />
        </div>
        <div>
          <Button name="2.000.000" />
          <Button name="5.000.000" />
          <Button onClick={() => setInput(true)} name="Other number" />
        </div>
      </div>
      {input && (
        <div>
          <label class="block">
            {/* <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span> */}
            <input
              type="email"
              name="email"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default Withdrawal;
