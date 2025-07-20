"use client";

import { useState } from "react";

import { useGetUser } from "@hooks/queries";

import MobileHeader from "@module/MobileHeader";
import DesktopHeader from "@module/DesktopHeader";

import Login from "@modal/Login";
import Otp from "@modal/Otp";

import styles from "@layout/Header.module.css";
import { Toaster } from "react-hot-toast";

function Header() {
  const { data } = useGetUser();

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
            setShowSubMenu={setShowSubMenu}
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
