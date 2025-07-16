"use client";
import DatePicker from "react-multi-date-picker";
import jalali from "react-date-object/calendars/jalali";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";
import { JalaaliToDate } from "@utils/jalaali";

function UserDatePicker({ setUserDate }) {
  const [selectedDates, setSelectedDates] = useState(null);

  const changeHandler = (date) => {
    setSelectedDates(date);
    if (date) {
      const { day, month, year } = date;
      const convertedDate = JalaaliToDate(day, month.number, year);
      setUserDate(convertedDate);
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
      />
    </>
  );
}

export default UserDatePicker;
