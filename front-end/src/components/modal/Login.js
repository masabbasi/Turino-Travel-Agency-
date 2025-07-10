"use client";
import Close from "@icon/Close";
import styles from "@modal/Login.module.css";

function Login({ setModal }) {
  const formHandler = () => {
    setModal(2);
  };

  const closeHandler = () => {
    setModal(0);
  };

  return (
    <>
      {/* <div className={styles.cover}></div> */}
      <div className={styles.container}>
        <div className={styles.close} onClick={closeHandler}>
          <Close />
        </div>
        <p className={styles.title}>ورود به تورینو</p>
        <div className={styles.inputContainer}>
          <label htmlFor="numberInput">شماره موبایل خود را وارد کنید</label>
          <input type="number" id="numberInput" placeholder="0912***4253" />
        </div>
        <button className={styles.button} onClick={formHandler}>
          ارسال کد تائید
        </button>
      </div>
    </>
  );
}

export default Login;
