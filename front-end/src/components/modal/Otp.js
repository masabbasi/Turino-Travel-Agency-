"use client";
import ArrowLeft from "@icon/ArrowLeft";
import styles from "@modal/Otp.module.css";
import { Formik, Form } from "formik";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";
function Otp({ setModal }) {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const backHandler = () => {
    setModal(1);
  };

  const validationSchema = yup.object().shape({
    code1: yup
      .string()
      .required()
      .length(1)
      .matches(/^[0-9]{1}$/),

    code2: yup
      .string()
      .required()
      .length(1)
      .matches(/^[0-9]{1}$/),

    code3: yup
      .string()
      .required()
      .length(1)
      .matches(/^[0-9]{1}$/),

    code4: yup
      .string()
      .required()
      .length(1)
      .matches(/^[0-9]{1}$/),

    code5: yup
      .string()
      .required()
      .length(1)
      .matches(/^[0-9]{1}$/),
  });

  const [timer, setTimer] = useState(0); // 2 دقیقه = 120 ثانیه
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }

    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  const resetTimer = () => {
    setTimer(120);
    setIsTimerActive(true);
  };

  return (
    <>
      {/* <div className={styles.cover}></div> */}
      <div className={styles.container}>
        <div className={styles.back} onClick={backHandler}>
          <ArrowLeft />
        </div>
        <p className={styles.title}>کد تائید را وارد کنید</p>
        <Formik
          initialValues={{
            code1: "",
            code2: "",
            code3: "",
            code4: "",
            code5: "",
          }}
          validationSchema={validationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={(values, { setSubmitting }) => {
            // setModal(2);
          }}
        >
          {({ isSubmitting, getFieldProps, errors, touched }) => (
            <Form>
              <div className={styles.inputContainer}>
                <div className={styles.label}>
                  کد تائید به شماره *** ارسال شد!{" "}
                </div>
                <div className={styles.inputsContainer}>
                  {[1, 2, 3, 4, 5].map((num, index) => (
                    <input
                      key={`code${num}`}
                      type="text"
                      maxLength="1"
                      ref={inputRefs[index]}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        if (e.target.value && index < 4) {
                          inputRefs[index + 1].current.focus();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (
                          e.key === "Backspace" &&
                          !e.target.value &&
                          index > 0
                        ) {
                          inputRefs[index - 1].current.focus();
                        }
                      }}
                      className={`${
                        errors[`code${num}`] && touched[`code${num}`]
                          ? styles.invalidData
                          : ""
                      }`}
                      {...getFieldProps(`code${num}`)}
                    />
                  ))}
                </div>
                <div className={styles.error}>
                  {!!errors.code5 === true &&
                    "لطفا کد تائید را درست وارد کنید!"}
                </div>
              </div>
              <div className={styles.timer}>
                {" "}
                {isTimerActive ? (
                  <span>
                    {Math.floor(timer / 60)}:
                    {(timer % 60).toString().padStart(2, "0")} تا ارسال مجدد کد
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={resetTimer}
                    className={styles.resendButton}
                  >
                    ارسال مجدد کد
                  </button>
                )}
              </div>
              <button
                className={styles.button}
                type="submit"
                disabled={isSubmitting}
              >
                ارسال کد تائید
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Otp;
