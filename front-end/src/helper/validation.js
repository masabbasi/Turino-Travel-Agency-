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

//AccountData
export const AccountDataValidationSchema = yup.object({
  email: yup
    .string()
    .email("فرمت ایمیل نامعتبر است")
    .required("ایمیل را وارد کنید."),
});

//PersonalData
export const PersonalDataValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "نام باید حداقل ۲ کاراکتر باشد")
    .max(50, "نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد")
    .matches(
      /^[\u0600-\u06FF\s]+$/,
      "نام باید فقط شامل حروف فارسی و فاصله باشد"
    )
    .required("نام الزامی است"),

  lastName: yup
    .string()
    .min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد")
    .max(50, "نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد")
    .matches(
      /^[\u0600-\u06FF\s]+$/,
      "نام خانوادگی باید فقط شامل حروف فارسی و فاصله باشد"
    )
    .required("نام خانوادگی الزامی است"),

  nationalCode: yup
    .string()
    .matches(/^\d{10}$/, "کد ملی باید دقیقاً ۱۰ رقم باشد")
    .required("کد ملی الزامی است"),

  gender: yup
    .string()
    .oneOf(["male", "female"], "جنسیت باید مرد یا زن باشد")
    .required("جنسیت الزامی است"),

  birthDate: yup
    .date()
    .max(new Date(), "تاریخ تولد نمی‌تواند در آینده باشد")
    .required("تاریخ تولد الزامی است")
    .typeError("تاریخ تولد نامعتبر است"),
});

//BankData
export const BankDataValidationSchema = yup.object().shape({
  debitCard_code: yup
    .string()
    .matches(/^\d{16}$/, "شماره کارت باید دقیقاً ۱۶ رقم باشد")
    .required("شماره کارت الزامی است"),

  accountIdentifier: yup
    .string()
    .matches(/^\d{10,14}$/, "شماره حساب باید بین ۱۰ تا ۱۴ رقم باشد")
    .required("شماره حساب الزامی است"),

  shaba_code: yup
    .string()
    .matches(/^\d{24}$/, "شماره شبا باید دقیقاً ۲۴ رقم باشد")
    .required("شماره شبا الزامی است"),
});
