"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

import { Formik, Form, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";

import { useGetUserBasket } from "@hooks/queries";
import api from "@services/config";
import Profile from "@icon/Profile";
import { calculateTourDuration } from "@utils/calculateTourDuration";
import { reserveValidationSchema } from "@helper/validation";

import styles from "@app/reserve/[tourId]/ReserveTour.module.css";

function reserveTour() {
  const [tour, setTour] = useState({});
  const params = useParams();
  const router = useRouter();
  const { data } = useGetUserBasket();

  useEffect(() => {
    const getData = async () => {
      const { id, title, price, startDate, endDate } = await api.get(
        `/tour/${params.tourId}`
      );
      const { days, nights } = calculateTourDuration(startDate, endDate);
      setTour({ id, title, price, days, nights });
    };
    getData();
  }, [data]);

  return (
    <div className={styles.reserveTourContainer}>
      <Formik
        initialValues={{
          nationalCode: "",
          fullName: "",
          gender: "",
          birthDate: "",
        }}
        validationSchema={reserveValidationSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={async (values, { setSubmitting }) => {
          if (!data) {
            toast.error("توری در سبد خرید شما وجود ندارد!");
            setSubmitting(false);
            return;
          }
          const response = await api.post("/order", { ...values });
          if (response.message) {
            router.replace(`/success`);
          } else {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, getFieldProps }) => (
          <Form>
            <div className={styles.reserveTourForm}>
              <div className={styles.inputsContainer}>
                <div className={styles.reserveTourFormTitle}>
                  <Profile />
                  مشخصات مسافر
                </div>
                <div className={styles.inputAndErrorContainer}>
                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    {...getFieldProps("fullName")}
                  />
                  <div className={styles.error}>
                    <ErrorMessage name="fullName" component="div" />
                  </div>
                </div>
                <div className={styles.inputAndErrorContainer}>
                  <select {...getFieldProps("gender")}>
                    <option value="" label="جنسیت" />
                    <option value="men">مرد</option>
                    <option value="women">زن</option>
                  </select>
                  <div className={styles.error}>
                    <ErrorMessage name="gender" component="div" />
                  </div>
                </div>
                <div className={styles.inputAndErrorContainer}>
                  <input
                    type="text"
                    maxLength={10}
                    placeholder="کد ملی"
                    {...getFieldProps("nationalCode")}
                  />
                  <div className={styles.error}>
                    <ErrorMessage name="nationalCode" component="div" />
                  </div>
                </div>
                <div className={styles.inputAndErrorContainer}>
                  <input
                    className={styles.date}
                    type="date"
                    placeholder="تاریخ تولد"
                    {...getFieldProps("birthDate")}
                  />
                  <div className={styles.error}>
                    <ErrorMessage name="birthDate" component="div" />
                  </div>
                </div>
              </div>
              <div className={styles.reserveTourDetail}>
                <div className={styles.reserveTourDetailTitle}>
                  {Object.keys(tour).length > 0 ? (
                    <h2>{tour.title}</h2>
                  ) : (
                    <h2>نام تور</h2>
                  )}
                  {Object.keys(tour).length > 0 ? (
                    <p>
                      {tour.days && `${tour.days} روز `}
                      {tour.days && tour.nights && "و "}
                      {tour.nights && `${tour.nights} شب`}
                    </p>
                  ) : (
                    <p>-</p>
                  )}
                </div>
                <div className={styles.line}></div>
                <div className={styles.reserveTourDetailPrice}>
                  <div className={styles.reserveTourDetailPriceTitle}>
                    قیمت نهایی
                  </div>
                  <div>
                    <span>
                      {Object.keys(tour).length > 0 ? `${tour.price}` : "-"}
                    </span>
                    تومان
                  </div>
                </div>

                <button
                  className={styles.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {" "}
                  {isSubmitting ? (
                    <PropagateLoader
                      color="#FFFFFF"
                      cssOverride={{}}
                      size={3}
                    />
                  ) : (
                    "ثبت و خرید نهایی"
                  )}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Toaster position="top-center" />
    </div>
  );
}

export default reserveTour;
