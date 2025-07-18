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
  return `${jalaaliDate.jd + 1} ${monthNames[jalaaliDate.jm]} ${
    jalaaliDate.jy
  }`;
};

export const JalaaliToDate = (day, month, year) => {
  return jalaali.jalaaliToDateObject(year, month, day - 1).toISOString();
};
