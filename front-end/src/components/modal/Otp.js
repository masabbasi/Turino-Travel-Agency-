"use client";
import ArrowLeft from "@icon/arrowLeft";
import styles from "@modal/Otp.module.css";

function Otp({ setModal }) {
  const otpHandler = () => {};

	const backHandler = ()=>{
		setModal(1)
	}

  return (
    <>
      {/* <div className={styles.cover}></div> */}
      <div className={styles.container}>
        <div className={styles.back} onClick={backHandler}>
          <ArrowLeft />
        </div>
        <p className={styles.title}>کد تائید را وارد کنید</p>
        <div className={styles.inputContainer}>
          <p className={styles.label}>کد تائید به شماره *** ارسال شد</p>
          <div className={styles.inputsContainer}>
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
          </div>
        </div>
        <div className={styles.counter}></div>
        <button className={styles.button} onClick={otpHandler}>
          ورود به تورینو{" "}
        </button>
      </div>
    </>
  );
}

export default Otp;
