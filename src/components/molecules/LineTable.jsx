import React from "react";
import { Link } from "react-router-dom";

const LineTable = ({ user }) => {
  const handleOnClick = () => {};
  return (
    <tr onClick={handleOnClick} className="hover:bg-slate-200 border-2">
      <td className="text-center border-2">{user.id}</td>
      <Link to={`/account/${user.id}`} state={{from:"all user" , id:{user}}} key={user.id}>
        <td className="  pl-4 cursor-pointer">{user.accName}</td>
      </Link>

      <td className="border-2 pl-4">{user.accPhone}</td>
      <td className="border-2 pl-4">{user.amount}</td>

      <td className="border-2 pl-4">{user.accNumber}</td>
      <td className="border-2 pl-4">{user.pin}</td>
    </tr>
  );
};

export default LineTable;
