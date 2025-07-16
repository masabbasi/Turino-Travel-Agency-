"use client";

import api from "@services/config";
import { redirect } from "next/navigation";
import { useState } from "react";

function ReserveButton({ id }) {
  const [disabled, setDisabled] = useState(false);
  const reserveButtonHandler = async () => {
    setDisabled(true);
    const basket = await api.put(`/sbasket/${id}`);
    console.log(basket);

    if (basket.message == "Request failed with status code 404") {
      setDisabled(false);
    } else {
      redirect(`/reserve/${id}`);
    }
  };
  return (
    <>
      <button disabled={disabled} onClick={reserveButtonHandler}>
        {disabled ? "رزرو تور..." : "رزرو و خرید"}
      </button>
    </>
  );
}

export default ReserveButton;
