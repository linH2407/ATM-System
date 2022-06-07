import { base } from "./baseURL";

const getAll = () => {
  return fetch(`${base}/users`).then((response) => response.json());
};
const getUser = (id) => {
  return fetch(`${base}/users/${id}`).then((response) => response.json());
};
const updateBalance = (user, amountRemaining) => {
  return fetch(`${base}/users/${user.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: amountRemaining }),
  }).then((response) => response.json());
};

const createWithdraw = (user, amountRemaining, money, date) => {
  const data = {
    accNumber: user.accNumber,
    amountWithdrawal: money,
    amountRemaining: amountRemaining,
    date: date,
  };
  return fetch(
    `${base}/users/${user.id}/withdrawal`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then((response) => response.json());
};
export { getAll, getUser, updateBalance, createWithdraw };
