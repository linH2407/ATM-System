import React from "react";
import Table from "../components/organisms/Table";

const Home = ({ users }) => {
  return (
    <div>
      <h1 className="text-2xl mt-8 font-bold">List Account</h1>
      <Table users={users} />
    </div>
  );
};

export default Home;
