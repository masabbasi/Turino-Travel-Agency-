"use client";
import { useUser } from "@hooks/useUser";
import api from "@services/config";
import { redirect } from "next/navigation";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";

function ReserveButton({ id }) {
  const { data, isLoading } = useUser();
  const [disabled, setDisabled] = useState(false);
  const reserveButtonHandler = async () => {
    setDisabled(true);
    if (data) {
      const basket = await api.put(`/basket/${id}`);
      toast.success("تور به سبد خرید اضافه شد!");
      window.location.replace(`/reserve/${id}`);
      setDisabled(false);
    } else {
      toast.error("لطفا به حساب خود وارد شوید!");
    }
  };

  if (isLoading) {
    return (
      <>
        <button disabled={true}>
          <PropagateLoader color="#FFFFFF" cssOverride={{}} size={3} />
        </button>
      </>
    );
  }
  return (
    <>
      <button disabled={disabled} onClick={reserveButtonHandler}>
        {disabled ? (
          <PropagateLoader color="#FFFFFF" cssOverride={{}} size={3} />
        ) : (
          "رزرو و خرید"
        )}
      </button>
      <Toaster position="top-center" />
    </>
  );
}

export default ReserveButton;
