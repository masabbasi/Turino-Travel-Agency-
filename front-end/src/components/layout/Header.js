"use client";

import AirplaneSquare from "@icon/AirplaneSquare";
import Call from "@icon/Call";
import Home from "@icon/Home";
import Logo from "@icon/Logo";
import Profile from "@icon/Profile";
import SignIn from "@icon/SignIn";
import VolumeLow from "@icon/VolumeLow";
import HamburgerMenu from "@icon/HamburgerMenu";
import styles from "@layout/Header.module.css";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [toggelHamburger, setToggelHamburger] = useState(false);
  const hamburgerHandler = () => {
    setToggelHamburger(!toggelHamburger);
  };

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
              className={`${toggelHamburger && styles.cover}`}
              onClick={hamburgerHandler}
            ></div>
          </nav>
          <div>
            <SignIn />
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
            <Profile />
            ورود | ثبت نام
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
