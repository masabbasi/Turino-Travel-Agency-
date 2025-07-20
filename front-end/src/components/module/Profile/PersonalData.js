"use client";
import { useUpdateUserInfo } from "@hooks/mutations";
import Edit from "@icon/Edit";
import styles from "@module/Profile/PersonalData.module.css";
import { dateToJalaali } from "@utils/jalaali";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { useState } from "react";
import { PersonalDataValidationSchema } from "@helper/validation";

function PersonalData({
  firstName,
  lastName,
  nationalCode,
  gender,
  birthDate,
}) {
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
              firstName: firstName || "",
              lastName: lastName || "",
              nationalCode: nationalCode || "",
              gender: gender || "",
              birthDate: birthDate || "",
            }}
            validationSchema={PersonalDataValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, submitForm }) => (
              <Form>
                <div className={styles.PersonalDataItems}>
                  <div className={styles.PersonalDataEditItem}>
                    <div className={styles.PersonalDataItemInput}>
                      <p>نام</p>
                      <Field name="firstName" as="input" type="text" />
                    </div>
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className={styles.PersonalDataError}
                    />
                  </div>

                  <div className={styles.PersonalDataEditItem}>
                    <div className={styles.PersonalDataItemInput}>
                      <p>نام خانوادگی</p>
                      <Field name="lastName" as="input" type="text" />
                    </div>
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className={styles.PersonalDataError}
                    />
                  </div>

                  <div className={styles.PersonalDataEditItem}>
                    <div className={styles.PersonalDataItemInput}>
                      <p>کد ملی</p>
                      <Field name="nationalCode" as="input" type="text" />
                    </div>
                    <ErrorMessage
                      name="nationalCode"
                      component="div"
                      className={styles.PersonalDataError}
                    />
                  </div>

                  <div className={styles.PersonalDataEditItem}>
                    <div className={styles.PersonalDataItemInput}>
                      <p>جنسیت</p>
                      <Field name="gender" as="select">
                        <option value="">انتخاب جنسیت</option>
                        <option value="male">مرد</option>
                        <option value="female">زن</option>
                      </Field>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className={styles.PersonalDataError}
                    />
                  </div>

                  <div className={styles.PersonalDataEditItem}>
                    <div className={styles.PersonalDataItemInput}>
                      <p>تاریخ تولد</p>
                      <Field name="birthDate" as="input" type="date" />
                    </div>
                    <ErrorMessage
                      name="birthDate"
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
              <Edit /> ویرایش اطلاعات
            </button>
          </div>
          <div className={styles.PersonalDataItems}>
            <div className={styles.PersonalDataItem}>
              <p>نام و نام خانوادگی</p>
              <p>
                {firstName ? firstName : "-"} {lastName ? lastName : "-"}
              </p>
            </div>
            <div className={styles.PersonalDataItem}>
              <p>کد ملی</p>
              <p>{nationalCode ? nationalCode : "-"}</p>
            </div>
            <div className={styles.PersonalDataItem}>
              <p>جنسیت</p>
              <p>{gender ? (gender === "male" ? "مرد" : "زن") : "-"}</p>
            </div>
            <div className={styles.PersonalDataItem}>
              <p>تاریخ تولد</p>
              <p>{birthDate ? dateToJalaali(birthDate) : "-"}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PersonalData;
