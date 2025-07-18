"use client";
import { PuffLoader } from "react-spinners";
import styles from "@template/MyTour.module.css";
import { useGetUserTours } from "@hooks/queries";
import TourProfileCard from "@module/TourProfileCard";
import { useEffect } from "react";

function MyTours() {
  const { data, isPending } = useGetUserTours();

  const userTours = data || [];

  useEffect(() => {
    console.log("data:", data);
    console.log("userTours:", userTours);
  }, [data, userTours]);

  return (
    <div className={styles.toursContainer}>
      {isPending ? (
        <PuffLoader color="#28a745" />
      ) : userTours.length ? (
        userTours.map((tour) => <TourProfileCard key={tour.id} {...tour} />)
      ) : (
        <p className={styles.noTransactions}>توری خریداری نشده است.</p>
      )}
    </div>
  );
}

export default MyTours;
