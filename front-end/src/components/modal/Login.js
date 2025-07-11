"use client";

import { Formik, Form, ErrorMessage } from "formik";

import api from "@services/config";
import { loginValidationSchema } from "@helper/validation";

import Close from "@icon/Close";

import styles from "@modal/Login.module.css";

function Login({ setModal, setOtpCode }) {
  const closeHandler = () => {
    setModal(0);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.close} onClick={closeHandler}>
          <Close />
        </div>
        <p className={styles.title}>ورود به تورینو</p>

        <Formik
          initialValues={{ mobile: "" }}
          validationSchema={loginValidationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={async (values, { setSubmitting }) => {
            const response = await api.post(`/auth/send-otp`, values);

            if (response.code) {
              setOtpCode({ mobile: values.mobile, code: response.code });
              console.log(response.code);
              setModal(2);
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, getFieldProps }) => (
            <Form>
              <div className={styles.inputContainer}>
                <div className={styles.label}>
                  شماره موبایل خود را وارد کنید
                </div>
                <input
                  type="text"
                  placeholder="0912***4253"
                  maxLength="11"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                  {...getFieldProps("mobile")}
                />
                <div className={styles.error}>
                  <ErrorMessage name="mobile" component="div" />
                </div>
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

export default Login;
