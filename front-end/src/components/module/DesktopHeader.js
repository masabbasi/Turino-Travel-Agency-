"use client";

import Link from "next/link";

import SubMenu from "@module/SubMenu";

import ArrowDown from "@icon/ArrowDown";
import Profile from "@icon/Profile";

import styles from "@module/DesktopHeader.module.css";

function DesktopHeader({ toggleSubMenu, showSubMenu, loginHandler, data,setShowSubMenu }) {
  return (
    <>
      {" "}
      <div className={styles.desktopHeaderRight}>
        <div className={styles.desktopMenuLogo}>
          {/* <Logo /> */}
          <img src="/images/logo.webp" />
        </div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/">خدمات گردشگری</Link>
          </li>
          <li>
            <Link href="/">درباره ما</Link>
          </li>
          <li>
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
      </div>
      <div className={styles.desktopHeaderLeft}>
        {data ? (
          <div className={styles.userLoggedContainer}>
            <div className={styles.userLogged} onClick={toggleSubMenu}>
              <Profile />
              {data?.mobile}
              <ArrowDown className={showSubMenu ? styles.rotateUp : ""} />
            </div>
            {showSubMenu && <SubMenu data={data} setShowSubMenu={setShowSubMenu} />}
          </div>
        ) : (
          <div className={styles.logInContainer} onClick={loginHandler}>
            <Profile />
            ورود | ثبت نام
          </div>
        )}
      </div>
    </>
  );
}

export default DesktopHeader;
