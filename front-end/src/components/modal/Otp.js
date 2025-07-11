"use client";
import { useQueryClient } from "@tanstack/react-query";

import ArrowLeft from "@icon/ArrowLeft";
import styles from "@modal/Otp.module.css";
import api from "@services/config";
import { setCookies } from "@utils/cookies";
import { Formik, Form } from "formik";
import { useEffect, useRef, useState } from "react";
import * as yup from "yup";

function Otp({ setModal, otpCode, setOtpCode }) {
  const queryClient = useQueryClient();

  const inputRefs = [
    useRef(null),
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
    code6: yup
      .string()
      .required()
      .length(1)
      .matches(/^[0-9]{1}$/),
  });

  const [timer, setTimer] = useState(0);
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

  const resetTimer = async () => {
    const response = await api.post(`/auth/send-otp`, {
      mobile: otpCode.mobile,
    });
    if (response.code) {
      setOtpCode({ ...otpCode, code: response.code });
    }
    setTimer(30);
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
            code6: "",
          }}
          validationSchema={validationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={async (values, { setSubmitting }) => {
            setOtpCode({
              ...otpCode,
              code:
                values.code1 +
                values.code2 +
                values.code3 +
                values.code4 +
                values.code5 +
                values.code6,
            });
            const response = await api.post("/auth/check-otp", otpCode);
            if (response.accessToken) {
              setCookies(response);
              queryClient.invalidateQueries({ queryKey: ["user"] });

              setModal(0);
              setOtpCode({ mobile: "", code: "" });
            } else {
              setTimer(30);
            }
          }}
        >
          {({ isSubmitting, getFieldProps, errors, touched }) => (
            <Form>
              <div className={styles.inputContainer}>
                <div className={styles.label}>
                  {`کد تائید به شماره ${otpCode.mobile} ارسال شد.`}
                  <br />
                  {`کد تائید: ${otpCode.code}`}
                </div>
                <div className={styles.inputsContainer}>
                  {[1, 2, 3, 4, 5, 6].map((num, index) => (
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
