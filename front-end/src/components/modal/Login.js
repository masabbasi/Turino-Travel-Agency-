"use client";
import Close from "@icon/Close";
import styles from "@modal/Login.module.css";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";

function Login({ setModal }) {
  const closeHandler = () => {
    setModal(0);
  };

  const validationSchema = yup.object().shape({
    mobile: yup
      .string()
      .required("موبایل خود را وارد کنید")
      .length(11, "شماره موبایل باید دقیقاً ۱۱ رقم باشد")
      .matches(/^09[0-9]{9}$/, "شماره موبایل باید با 09 شروع شود!"),
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.close} onClick={closeHandler}>
          <Close />
        </div>
        <p className={styles.title}>ورود به تورینو</p>

        <Formik
          initialValues={{ mobile: "" }}
          validationSchema={validationSchema}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={(values, { setSubmitting }) => {
            setModal(2);
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
