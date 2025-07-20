"use client";
import { BankDataValidationSchema } from "@helper/validation";
import { useUpdateUserInfo } from "@hooks/mutations";
import Edit from "@icon/Edit";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import styles from "@module/Profile/PersonalData.module.css";

function BankData({ debitCard_code, accountIdentifier, shaba_code }) {
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
          <Formik
            initialValues={{
              debitCard_code: debitCard_code || "",
              accountIdentifier: accountIdentifier || "",
              shaba_code: shaba_code || "",
            }}
            validationSchema={BankDataValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, submitForm }) => (
              <Form>
                <div className={styles.PersonalDataItems}>
                  <div className={styles.PersonalDataEditItem}>
                    <div className={styles.PersonalDataItemInput}>
                      <p>شماره کارت</p>
                      <Field name="debitCard_code" as="input" type="text" />
                    </div>
                    <ErrorMessage
                      name="debitCard_code"
                      component="div"
                      className={styles.PersonalDataError}
                    />
                  </div>

                  <div className={styles.PersonalDataEditItem}>
                    <div className={styles.PersonalDataItemInput}>
                      <p>شماره حساب</p>
                      <Field name="accountIdentifier" as="input" type="text" />
                    </div>
                    <ErrorMessage
                      name="accountIdentifier"
                      component="div"
                      className={styles.PersonalDataError}
                    />
                  </div>

                  <div className={styles.PersonalDataEditItem}>
                    <div className={styles.PersonalDataItemInput}>
                      <p>شمار شبا</p>
                      <Field name="shaba_code" as="input" type="text" />
                    </div>
                    <ErrorMessage
                      name="shaba_code"
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
            <h2 className={styles.PersonalDataTitle}>اطلاعات حساب بانکی</h2>
            <button className={styles.editButton}  onClick={() => setEdit(true)}>
              <Edit /> ویرایش اطلاعات
            </button>
          </div>
          <div className={styles.PersonalDataItems}>
            <div className={styles.PersonalDataItem}>
              <p>شماره کارت</p>
              <p>{debitCard_code ? debitCard_code : "-"}</p>
            </div>

            <div className={styles.PersonalDataItem}>
              <p>شماره حساب</p>
              <p>{accountIdentifier ? accountIdentifier : "-"}</p>
            </div>
            <div className={styles.PersonalDataItem}>
              <p>شماره شبا</p>
              <p>{shaba_code ? shaba_code : "-"}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BankData;
