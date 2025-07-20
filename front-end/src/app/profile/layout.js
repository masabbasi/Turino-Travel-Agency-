"use client";

import styles from "@app/profile/ProfileLayout.module.css";

import ConvertCard from "@icon/ConvertCard";
import Profile from "@icon/Profile";
import SunFog from "@icon/SunFog";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ProfileLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className={styles.profileContainer}>
      <div className={styles.sideBarContainer}>
        <Link
          href="/profile"
          className={`${pathname === "/profile" ? styles.activeTab : ""}`}
        >
          <Profile />
          پروفایل
        </Link>
        <Link
          href="/profile/my-tours"
          className={`${
            pathname === "/profile/my-tours" ? styles.activeTab : ""
          }`}
        >
          <SunFog />
          تورهای من
        </Link>
        <Link
          href="/profile/my-transactions"
          className={`${
            pathname === "/profile/my-transactions" ? styles.activeTab : ""
          }`}
        >
          <ConvertCard />
          تراکنش ها
        </Link>
      </div>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
}

export default ProfileLayout;
