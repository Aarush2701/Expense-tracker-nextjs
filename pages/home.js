import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { APIUrl, handleError, handleSuccess } from "../utils";
import ExpenseTable from "../components/ExpenseTable";
import ExpenseDetails from "../components/ExpenseDetails";
import ExpenseForm from "../components/ExpenseForm";
import PieChartComponent from "../components/PieChartComponent";

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [incomeAmt, setIncomeAmt] = useState(0);
  const [expenseAmt, setExpenseAmt] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out");
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  useEffect(() => {
    const amounts = expenses.map((item) => item.amount);
    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => acc + item, 0);
    const exp =
      amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => acc + item, 0) * -1;
    setIncomeAmt(income);
    setExpenseAmt(exp);
  }, [expenses]);

  const deleteExpens = async (id) => {
    try {
      const url = `${APIUrl}/expenses/${id}`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        method: "DELETE",
      };

      const response = await fetch(url, headers);
      if (response.status === 403) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      const result = await response.json();
      handleSuccess(result?.message);
      setTimeout(() => {
      window.location.reload();
    }, 200);
    } catch (err) {
      handleError(err);
    }
  };

  const fetchExpenses = async () => {
    try {
      const url = `${APIUrl}/expenses`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      if (response.status === 403) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }
      const result = await response.json();
      setExpenses(result.data);
    } catch (err) {
      handleError(err);
    }
  };

  const addTransaction = async (data) => {
    try {
      const url = `${APIUrl}/expenses`;
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      };
      const response = await fetch(url, headers);
      if (response.status === 403) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }
      const result = await response.json();
      handleSuccess(result?.message);
      setTimeout(() => {
      window.location.reload();
    }, 200);
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <div className="user-section">
        <h1 className="mainhead">Welcome {loggedInUser}</h1>
        <button className="logbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* New wrapper to align sections horizontally */}
      <div style={{ display: "flex", gap: "50px", alignItems: "flex-start" }}>
        <div className="nodeelement">
          <ExpenseDetails incomeAmt={incomeAmt} expenseAmt={expenseAmt} />
          <ExpenseForm addTransaction={addTransaction} />
        </div>

        <div>
          <h2 className="txnloghead">Transaction Logs</h2>
          <ExpenseTable expenses={expenses} deleteExpens={deleteExpens} />
        </div>

        <div className="piechart">
          <PieChartComponent expenses={expenses} />
        </div>
      </div>
    </>
  );
}
