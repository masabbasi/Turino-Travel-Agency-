"use client";

import { useState } from "react";
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

function Header() {
  const [modal, setModal] = useState(0);

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
            {!data ? (
              <div onClick={loginHandler}>
                <SignIn />
              </div>
            ) : (
              "ورود"
            )}
          </div>
        </div>
        <div className={styles.desktopHeader}>
          <div className={styles.desktopHeaderRight}>
            <div className={styles.desktopMenuLogo}>
              <Logo />
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
            {!data === "undefined" ? (
              <div onClick={loginHandler}>
                <Profile />
                ورود | ثبت نام
              </div>
            ) : (
              "ورود"
            )}
          </div>
        </div>
      </header>
      {modal === 1 && <Login setModal={setModal} />}
      {modal === 2 && <Otp setModal={setModal} />}
    </>
  );
}

export default Header;
