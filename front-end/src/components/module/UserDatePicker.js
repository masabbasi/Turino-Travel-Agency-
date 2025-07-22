"use client";
import DatePicker, { DateObject } from "react-multi-date-picker";
import jalali from "react-date-object/calendars/jalali";
import persian_fa from "react-date-object/locales/persian_fa";
import { useEffect, useRef, useState } from "react";
import { JalaaliToDate, dateToJalaali } from "@utils/jalaali";

function UserDatePicker({ userDate, setUserDate }) {
  const [selectedDates, setSelectedDates] = useState(null);
  const isFirstChange = useRef(true);

  useEffect(() => {
    if (isFirstChange.current && (userDate[0] || userDate[1])) {
      const date_start = userDate[0] ? new DateObject(userDate[0]).subtract(1, 'day') : null;
      console.log("userData", dateToJalaali(date_start));
      const date_end = userDate[1] ? new DateObject(userDate[1]).subtract(1, 'day') : null;
      setSelectedDates([date_start, date_end]);
      isFirstChange.current = false;
    }
  }, [userDate]);

  const changeHandler = (date) => {
    setSelectedDates(date);
    if (date[0]) {
      const { day, month, year } = date[0];
      const convertedDate = JalaaliToDate(day, month.number, year)
        .slice(0, 10)
        .toString();
      setUserDate([convertedDate, userDate[1]]);
    }
    if (date[1]) {
      const { day, month, year } = date[1];
      const convertedDate = JalaaliToDate(day, month.number, year)
        .slice(0, 10)
        .toString();
      setUserDate([userDate[0], convertedDate]);
    }
  };

  return (
    <>
      <DatePicker
        style={{
          width: "100%",
          height: "5rem",
          border: "0.1rem solid #00000033",
          borderRadius: "1rem",
          outline: "none",
          padding: "0.5rem",
        }}
        containerStyle={{
          width: "100%",
        }}
        value={selectedDates}
        onChange={changeHandler}
        calendar={jalali}
        locale={persian_fa}
        format="DD/MM/YYYY"
        range
        placeholder="انتخاب تاریخ رفت و برگشت"
      />
    </>
  );
}

export default UserDatePicker;
