import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/molecules/Button";

const Menu = () => {
  const [show, setShow] = useState(true);

  const [user, setUser] = useState([]);
  const params = useParams();
  useEffect(() => {
    const id = params.id;
    fetch(`https://628dcec6a339dfef87a09158.mockapi.io/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="mt-20 w-1/2 mx-auto">
      {/* <h1 className="text-4xl font-semibold mb-4">Profile</h1> */}
      {show && (
        <div>
          <div>
            <div className="mt-20 flex justify-between">
              <div>
                <Link
                  onClick={() => setShow(false)}
                  state={{ from: "all user", id: { user } }}
                  to={`/account/${params.id}/balance-inquiry`}
                >
                  <Button name="Balance Inquiry" />
                </Link>
                <Link
                  onClick={() => setShow(false)}
                  state={{ from: "all user", id: { user } }}
                  to={`/account/${params.id}/withdrawal`}
                >
                  <Button name="Withdrawal" />
                </Link>
                <Button name="Transfer" />
              </div>
              <div className="w-[168px]">
                <Button name="Transactions" />
                <Button name="Change PIN" />
                <Button name="Other" />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Menu;
