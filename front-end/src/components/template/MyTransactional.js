"use client";

import { useGetUserTransactions } from "@hooks/queries";
import { dateToJalaali } from "@utils/jalaali";
import { PuffLoader } from "react-spinners";
import styles from "@template/MyTransactional.module.css";

function MyTransactional() {
  const { data, isPending } = useGetUserTransactions();

  const userTransactions = data || [];

  return (
    <div className={styles.transactionsContainer}>
      {isPending ? (
        <PuffLoader color="#28a745" />
      ) : userTransactions.length ? (
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>تاریخ و ساعت</th>
              <th>مبلغ (تومان)</th>
              <th>نوع تراکنش</th>
              <th>شماره سفارش</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {userTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{dateToJalaali(transaction.createdAt)}</td>
                <td>{transaction.amount.toLocaleString("fa-IR")}</td>
                <td>{transaction.type === "Purchase" ? "خرید تور" : "سایر"}</td>
                <td className={styles.transactionId}>
                  {`TR${transaction.id.slice(0, 6)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={styles.noTransactions}>تراکنشی انجام نشده است.</p>
      )}
    </div>
  );
}

export default MyTransactional;
