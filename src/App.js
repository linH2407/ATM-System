import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BalanceInquiry from "./pages/BalanceInquiry";
import Withdrawal from "./pages/Withdrawal";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Acc from "./pages/Acc";
import { getAll } from "./services/bankaccount";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAll().then((users) => {
      setUsers(users);
    });
  }, []);
  return (
    <div className="max-w-[60%] mx-auto mt-20">
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="account/:id" element={<Acc users={users} />}>
          <Route element={<Menu />} index />
          <Route
            path="balance-inquiry"
            element={<BalanceInquiry  />}
          />
          <Route path="withdrawal" element={<Withdrawal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
