import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import BalanceInquiry from "./pages/BalanceInquiry";
import Withdrawal from "./pages/Withdrawal";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import InputAmount from "./molecules/InputAmount";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchListUser() {
      const url = "https://628dcec6a339dfef87a09158.mockapi.io/api/users";
      const response = await fetch(url);
      const responseJSON = await response.json();
      const data = responseJSON;
      setUsers(data);
    }
    fetchListUser();
  }, []);
  return (
    <div className="max-w-[60%] mx-auto mt-6">
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="account" element={<Menu users={users} />}>
          <Route path="balanceInquiry" element={<BalanceInquiry />} />
          <Route path="withdrawal" element={<Withdrawal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
