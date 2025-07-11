"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@layout/Header.module.css";
import AirplaneSquare from "@icon/AirplaneSquare";
import Call from "@icon/Call";
import Home from "@icon/Home";
import Logo from "@icon/Logo";
import Profile from "@icon/Profile";
import SignIn from "@icon/SignIn";
import VolumeLow from "@icon/VolumeLow";
import HamburgerMenu from "@icon/HamburgerMenu";
import { useUser } from "@hooks/useUser";
import Login from "@modal/Login";
import Otp from "@modal/Otp";
import { clearCookies } from "@utils/cookies";
import ArrowDown from "@icon/ArrowDown";
import Account from "@icon/Account";
import User from "@icon/User";
import Logout from "@icon/Logout";
import { useQueryClient } from "@tanstack/react-query";

function Header() {
  const queryClient = useQueryClient();

  const [modal, setModal] = useState(0);
  const [otpCode, setOtpCode] = useState({ mobile: "", code: "" });
  // const [userLogged, setUserLogged] = useState(false);

  const [toggelHamburger, setToggelHamburger] = useState(false);
  const hamburgerHandler = () => {
    setToggelHamburger(!toggelHamburger);
  };

  const coverHandler = () => {
    setToggelHamburger(false);
    setModal(0);
  };

  const loginHandler = () => {
    setModal(1);
  };

  const exitHandler = async () => {
    clearCookies();
    await queryClient.invalidateQueries({ queryKey: ["user"] });
  };

  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const { data } = useUser();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.mobileHeader}>
          <nav>
            <div onClick={hamburgerHandler}>
              <HamburgerMenu />
            </div>
            <div
              className={`${styles.mobileMenu} ${
                toggelHamburger && styles.mobileMenu__active
              }`}
            >
              <div className={styles.mobileMenuLogo}>
                <Logo />
              </div>
              <ul className={styles.mobileMenuList}>
                <li>
                  <Home />
                  <Link href="/">صفحه اصلی</Link>
                </li>
                <li>
                  <AirplaneSquare />
                  <Link href="/">خدمات گردشگری</Link>
                </li>
                <li>
                  <VolumeLow />
                  <Link href="/">درباره ما</Link>
                </li>
                <li>
                  <Call />
                  <Link href="/">تماس با ما</Link>
                </li>
              </ul>
            </div>
            <div
              className={`${(toggelHamburger || modal > 0) && styles.cover}`}
              onClick={coverHandler}
            ></div>
          </nav>
          <div>
            {data ? (
              <div className={styles.userLogged} onClick={toggleSubMenu}>
                <Profile />
                {data?.mobile}
                <ArrowDown />
              </div>
            ) : (
              <div onClick={loginHandler}>
                <SignIn />
              </div>
            )}
          </div>
        </div>
        <div className={styles.desktopHeader}>
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
                {showSubMenu && (
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
                )}
              </div>
            ) : (
              <div className={styles.logInContainer} onClick={loginHandler}>
                <Profile />
                ورود | ثبت نام
              </div>
            )}
          </div>
        </div>
      </header>
      {modal === 1 && <Login setModal={setModal} setOtpCode={setOtpCode} />}
      {modal === 2 && (
        <Otp setModal={setModal} otpCode={otpCode} setOtpCode={setOtpCode} />
      )}
    </>
  );
}

export default Header;
