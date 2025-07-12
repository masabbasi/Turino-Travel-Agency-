"use client";

import Link from "next/link";

import SubMenu from "@module/SubMenu";

import AirplaneSquare from "@icon/AirplaneSquare";
import Call from "@icon/Call";
import Home from "@icon/Home";
import Logo from "@icon/Logo";
import SignIn from "@icon/SignIn";
import VolumeLow from "@icon/VolumeLow";
import HamburgerMenu from "@icon/HamburgerMenu";
import Profile from "@icon/Profile";
import ArrowDown from "@icon/ArrowDown";

import styles from "@module/MobilHeader.module.css";

function MobileHeader({
  toggelHamburger,
  hamburgerHandler,
  loginHandler,
  toggleSubMenu,
  showSubMenu,
  data,
}) {
  return (
    <>
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
      </nav>
      <div>
        {data ? (
          <>
            <div className={styles.userLogged} onClick={toggleSubMenu}>
              <Profile />
              {data?.mobile}
              <ArrowDown className={showSubMenu ? styles.rotateUp : ""} />
            </div>
            {showSubMenu && <SubMenu data={data} />}
          </>
        ) : (
          <div onClick={loginHandler}>
            <SignIn />
          </div>
        )}
      </div>
    </>
  );
}

export default MobileHeader;
