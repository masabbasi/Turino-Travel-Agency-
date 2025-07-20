"use client";
import { AccountDataValidationSchema } from "@helper/validation";
import { useUpdateUserInfo } from "@hooks/mutations";
import Edit from "@icon/Edit";
import styles from "@module/Profile/PersonalData.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";

import { useState } from "react";

function AccountData({ mobile, email }) {
  const [edit, setEdit] = useState(false);
  const { mutate, isPending } = useUpdateUserInfo();

  const noHandler = () => {
    setEdit(false);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    if (isPending) return;
    mutate(values, {
      onSuccess: () => {
        toast.success("اطلاعات با موفقیت ویرایش شد!");
        setEdit(false);
      },
      onError: () => {
        toast.error("مجدد تلاش کنید!");
        resetForm();
        setSubmitting(false);
      },
    });
  };

  return (
    <div className={styles.PersonalDataContainer}>
      {edit ? (
        <>
          {" "}
          <Formik
            initialValues={{ email: email || "" }}
            validationSchema={AccountDataValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, submitForm }) => (
              <Form>
                <div className={styles.PersonalDataItems}>
                  <div className={styles.PersonalDataItem}>
                    <p>شماره موبایل</p>
                    <p>{mobile}</p>
                  </div>
                  <div className={styles.PersonalDataEditItem}>
                    <div className={styles.PersonalDataItemInput}>
                      <p>ایمیل</p>
                      <Field name="email" as="input" type="email" />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.PersonalDataError}
                    />
                  </div>
                </div>
                <div className={styles.PersonalDataEditButton}>
                  <button
                    type="button"
                    onClick={submitForm}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "در حال ارسال..." : "تائید"}
                  </button>
                  <button type="button" onClick={noHandler}>
                    انصراف
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <div className={styles.PersonalDataHeader}>
            <h2 className={styles.PersonalDataTitle}>اطلاعات حساب کاربری</h2>
            <button onClick={() => setEdit(true)}>
              <Edit /> ویرایش ایمیل
            </button>
          </div>
          <div className={styles.PersonalDataItems}>
            <div className={styles.PersonalDataItem}>
              <p>شماره موبایل</p>
              <p>{mobile}</p>
            </div>
            <div className={styles.PersonalDataItem}>
              <p>ایمیل</p>
              <p>{email ? email : "-"}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AccountData;
