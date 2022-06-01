import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BalanceInquiry from "./pages/BalanceInquiry";
import Withdrawal from "./pages/Withdrawal";
import InputAmount from "./components/molecules/InputAmount";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Acc from "./pages/Acc";
import Amount from "./pages/Amount";

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
        <Route path="account/:id" element={<Acc users={users} />}>
          <Route element={<Menu />} index />
          <Route
            path="balance-inquiry"
            element={<BalanceInquiry users={users} />}
          />
          <Route path="withdrawal" element={<Withdrawal />} />
          <Route path="withdrawal/amount" element={<Amount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
