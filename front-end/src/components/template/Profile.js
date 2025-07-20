"use client";

import { useGetUser } from "@hooks/queries";
import AccountData from "@module/Profile/AccountData";
import BankData from "@module/Profile/BankData";
import PersonalData from "@module/Profile/PersonalData";
import { PuffLoader } from "react-spinners";
import styles from "@template/Profile.module.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function Profile() {
  const { data, isPending } = useGetUser();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {isPending ? (
        <PuffLoader color="#28a745" />
      ) : (
        <div className={styles.profileContainer}>
          <AccountData {...data} />
          <PersonalData {...data} />
          <BankData {...data} />
          <Toaster position="top-center" />
        </div>
      )}
    </>
  );
}

export default Profile;
