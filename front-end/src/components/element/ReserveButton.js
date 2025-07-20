"use client";
import { useGetUser } from "@hooks/queries";
import api from "@services/config";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";

function ReserveButton({ id }) {
  const [blur, setBlur] = useState(false);
  const { data, isLoading } = useGetUser();
  const [disabled, setDisabled] = useState(false);

  const reserveButtonHandler = async () => {
    setBlur(true);
    setDisabled(true);
    try {
      if (data) {
        const basket = await api.put(`/basket/${id}`);
        toast.success(`${basket.message}`, {
          duration: 3000,
        });
        window.location.replace(`/reserve/${id}`);
      } else {
        toast.error("لطفا به حساب خود وارد شوید!");
        setTimeout(() => {
          setBlur(false);
        }, 2000);
      }
    } catch (error) {
      toast.error("خطا در رزرو، لطفاً دوباره تلاش کنید!");
    }
    setDisabled(false);
  };

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    zIndex: 3,
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
      {blur ? <div style={style}></div> : ""}

      <button disabled={disabled} onClick={reserveButtonHandler}>
        {disabled ? (
          <PropagateLoader color="#FFFFFF" cssOverride={{}} size={3} />
        ) : (
          "رزرو و خرید"
        )}
      </button>
      {/* <Toaster position="top-center" /> */}
    </>
  );
}

export default ReserveButton;
