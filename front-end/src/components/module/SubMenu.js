"use client";
import User from "@icon/User";
import Account from "@icon/Account";
import Logout from "@icon/Logout";
import styles from "@module/SubMenu.module.css";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { clearCookies } from "@utils/cookies";

function SubMenu({ data }) {
  const queryClient = useQueryClient();

  const exitHandler = () => {
    clearCookies();
    queryClient.invalidateQueries({ queryKey: ["user"] });
  };
  return (
    <div className={styles.subMenu}>
      <div className={styles.subMenuItem}>
        <User />
        <span>{data?.mobile}</span>
      </div>
      <div className={styles.subMenuItem}>
        <Account />
        <Link href="/dashboard">اطلاعات حساب کاربری</Link>
      </div>
      <div className={styles.subMenuItem} onClick={exitHandler}>
        <Logout />
        <span>خروج از حساب کاربری</span>
      </div>
    </div>
  );
}

export default SubMenu;
