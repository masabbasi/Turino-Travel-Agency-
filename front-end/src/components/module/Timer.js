"use client";
import toast from "react-hot-toast";

import { useEffect, useState } from "react";

import api from "@services/config";

function Timer({ otpCode, setOtpCode }) {
  const [timer, setTimer] = useState(10);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    let interval;

    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }

    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  const resetTimer = async () => {
    const response = await api.post(`/auth/send-otp`, {
      mobile: otpCode.mobile,
    });
    if (response.code) {
      setOtpCode({ ...otpCode, code: response.code });
      toast.success(`کد تائید: ${response.code}`, {
        duration: 5000,
      });
    }
    setTimer(30);
    setIsTimerActive(true);
  };

  return (
    <>
      {isTimerActive ? (
        <span>
          {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")} تا
          ارسال مجدد کد
        </span>
      ) : (
        <button
          type="button"
          onClick={resetTimer}
          style={{
            border: "none",
            outline: "none",
            padding: "1rem",
            borderRadius: "0.8rem",
          }}
        >
          ارسال مجدد کد
        </button>
      )}
    </>
  );
}

export default Timer;
