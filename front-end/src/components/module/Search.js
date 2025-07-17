"use client";
import { useState, useEffect } from "react";
import styles from "./Search.module.css";
import UserDatePicker from "./UserDatePicker";
import api from "@services/config";

const cities = [
  { label: "تهران", value: "1" },
  { label: "سنندج", value: "2" },
  { label: "مادرید", value: "3" },
  { label: "اصفهان", value: "4" },
  { label: "سلیمانیه", value: "5" },
  { label: "هولر", value: "6" },
  { label: "مازندران", value: "7" },
  { label: "آفرود", value: "8" },
  { label: "ایتالیا", value: "9" },
];

function Search() {
  const [userDate, setUserDate] = useState(null);

  const [formData, setFormData] = useState({
    destination: "",
    origin: "",
    date: null,
  });

  const selectChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, date: userDate }));
  }, [userDate]);

  const searchHandler = async (e) => {
    e.preventDefault();
    const res = await api.get(
      `/tour?destinationId=${formData.destination}&originId=${formData.origin}&startDate=${formData.date}`
    );
    console.log(res);
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm}>
        <div className={styles.searchOrigin}>
          <select
            name="origin"
            value={formData.origin}
            onChange={selectChangeHandler}
            className={styles.select}
          >
            <option value="" disabled>
              شهر مبدا
            </option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.searchDestination}>
          <select
            name="destination"
            value={formData.destination}
            onChange={selectChangeHandler}
            className={styles.select}
          >
            <option value="" disabled>
              شهر مقصد
            </option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.searchDate}>
          <UserDatePicker setUserDate={setUserDate} />
        </div>
        <div className={styles.searchButton}>
          <button onClick={searchHandler}>جستجو</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
