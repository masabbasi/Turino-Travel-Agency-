"use client";
import DatePicker, { DateObject } from "react-multi-date-picker";
import jalali from "react-date-object/calendars/jalali";
import persian_fa from "react-date-object/locales/persian_fa";
import { useEffect, useState } from "react";
import { JalaaliToDate } from "@utils/jalaali";

function UserDatePicker({ userDate, setUserDate }) {
  // const today = new DateObject();
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    console.log("userDate", userDate);
    if (selectedDates[0]) {
      const date_start = userDate[0] ? new DateObject(userDate[0]) : null;
      setSelectedDates([date_start, selectedDates[1]]);
    }
    if (selectedDates[1]) {
      const date_end = userDate[1] ? new DateObject(userDate[1]) : null;
      setSelectedDates([selectedDates[0], date_end]);
    }
  }, [userDate]);

  const changeHandler = (date) => {
    console.log("dateweeeeee", date);
    console.log("day0", date[0]?.day);
    console.log("day1", date[1]?.day);
    setSelectedDates(date);
    if (date[0]) {
      const { day, month, year } = date[0];
      const convertedDate = JalaaliToDate(day, month.number, year);
      console.log("convert-start", convertedDate);
      setUserDate([convertedDate, userDate[1]]);
    }
    if (date[1]) {
      const { day, month, year } = date[1];
      const convertedDate = JalaaliToDate(day, month.number, year);
      console.log("convert-end", convertedDate);
      setUserDate([userDate[0], convertedDate]);
    }
    console.log("dataUserrrrrr", userDate);
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
      />
    </>
  );
}

export default UserDatePicker;
