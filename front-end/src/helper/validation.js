import * as yup from "yup";

//Login
export const loginValidationSchema = yup.object().shape({
  mobile: yup
    .string()
    .required("موبایل خود را وارد کنید")
    .length(11, "شماره موبایل باید دقیقاً ۱۱ رقم باشد")
    .matches(/^09[0-9]{9}$/, "شماره موبایل باید با 09 شروع شود!"),
});

//OTP Code
export const otpValidationSchema = yup.object().shape({
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

//Reserve
export const reserveValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("نام کامل خود را وارد کنید")
    .min(6, " باید حداقل 6 حرف باشد"),
  gender: yup.string().required("جنسیت خود را وارد کنید"),
  nationalCode: yup
    .string()
    .required("کد ملی خود را وارد کنید")
    .length(10, "کد ملی باید دقیقاً 10 رقم باشد"),
  birthDate: yup.string().required("تاریخ تولد خود را وارد کنید"),
});
