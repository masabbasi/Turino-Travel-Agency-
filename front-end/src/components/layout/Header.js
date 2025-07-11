"use client";

import { useState } from "react";

import Link from "next/link";

import { useUser } from "@hooks/useUser";

import Login from "@modal/Login";
import Otp from "@modal/Otp";

// import AirplaneSquare from "@icon/AirplaneSquare";
// import Call from "@icon/Call";
// import Home from "@icon/Home";
// import Logo from "@icon/Logo";
// import SignIn from "@icon/SignIn";
// import VolumeLow from "@icon/VolumeLow";
// import HamburgerMenu from "@icon/HamburgerMenu";
import Profile from "@icon/Profile";
import ArrowDown from "@icon/ArrowDown";

import SubMenu from "@module/SubMenu";

import styles from "@layout/Header.module.css";
import MobileHeader from "@module/MobileHeader";
import DesktopHeader from "@module/DesktopHeader";

function Header() {
  const { data } = useUser();

  const [modal, setModal] = useState(0);
  const [otpCode, setOtpCode] = useState({ mobile: "", code: "" });

  const [toggelHamburger, setToggelHamburger] = useState(false);
  const hamburgerHandler = () => {
    setToggelHamburger(!toggelHamburger);
  };

  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const coverHandler = () => {
    setToggelHamburger(false);
    setModal(0);
  };

  const loginHandler = () => {
    setModal(1);
  };

  return (
    <>
      <header className={styles.header}>
        <div
          className={`${(toggelHamburger || modal > 0) && styles.cover}`}
          onClick={coverHandler}
        ></div>
        <div className={styles.mobileHeader}>
          <MobileHeader
            toggelHamburger={toggelHamburger}
            hamburgerHandler={hamburgerHandler}
            loginHandler={loginHandler}
            toggleSubMenu={toggleSubMenu}
            showSubMenu={showSubMenu}
            setShowSubMenu={setShowSubMenu}
            data={data}
          />
        </div>
        <div className={styles.desktopHeader}>
          <DesktopHeader
            toggleSubMenu={toggleSubMenu}
            showSubMenu={showSubMenu}
            loginHandler={loginHandler}
            data={data}
          />
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
