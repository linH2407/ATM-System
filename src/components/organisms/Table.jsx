import React from "react";
import LineTable from "../molecules/LineTable";

const Table = ({ users }) => {
  return (
    <div>
      <table className="table-auto w-[100%] mt-4">
        <thead>
          <tr className="text-left pl-3 border-2 ">
            <th className="border-2 text-center p-0 ">STT</th>
            <th className=" pl-4 ">Name</th>
            <th className="border-2 pl-4">Phone</th>
            <th className="border-2 pl-4">Amount</th>
            <th className="border-2 pl-4">Account Number</th>
            <th className=" pl-4">Pin</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <LineTable key={user.id} value={user} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
