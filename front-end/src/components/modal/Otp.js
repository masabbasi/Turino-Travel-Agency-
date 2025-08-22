"use client";

import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Formik, Form } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import Timer from "@module/Timer";

import api from "@services/config";
import { otpValidationSchema } from "@helper/validation";
import { setCookies } from "@utils/cookies";

import ArrowLeft from "@icon/ArrowLeft";

import styles from "@modal/Otp.module.css";

function Otp({ setModal, otpCode, setOtpCode }) {
  const [error, setError] = useState(false);
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

  return (
    <>
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
          validationSchema={otpValidationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={async (values, { setSubmitting }) => {
            setError(false);
            const createOtpCode = Object.values(values).join("");
            if (otpCode.code === createOtpCode) {
              const response = await api.post("/auth/check-otp", {
                mobile: otpCode.mobile,
                code: otpCode.code,
              });
              if (response.accessToken) {
                setCookies(response);
                queryClient.invalidateQueries({ queryKey: ["user"] });
                toast.success(`شما وارد شدید!`, {
                  duration: 3000,
                });
                setModal(0);
                setOtpCode({ mobile: "", code: "" });
              } else {
                setTimer(30);
              }
            } else {
              setError(true);
            }

            setSubmitting(false);
          }}
        >
          {({ isSubmitting, getFieldProps, errors, touched }) => (
            <Form>
              <div className={styles.inputContainer}>
                <div className={styles.label}>
                  {`کد تائید به شماره ${otpCode.mobile} ارسال شد.`}
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
                        if (e.target.value && index < 5) {
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
                {error && (
                  <>
                    <div className={styles.error}>
                      لطفا کد درست را وارد کنید.
                    </div>
                  </>
                )}
              </div>
              <div className={styles.timer}>
                <Timer otpCode={otpCode} setOtpCode={setOtpCode} />
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