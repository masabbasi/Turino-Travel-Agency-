import * as jalaali from "jalaali-js";

const monthNames = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export const dateToJalaali = (date) => {
  const jalaaliDate = jalaali.toJalaali(new Date(date));
  console.log("------------", jalaaliDate);
  return `${jalaaliDate.jd} ${monthNames[jalaaliDate.jm - 1]} ${
    jalaaliDate.jy
  }`;
};
