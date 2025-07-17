"use client";
import { useUser } from "@hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PuffLoader } from "react-spinners";

const AuthProvider = ({ children }) => {
  const router = useRouter();
  console.log("Hi");
  const { data, isLoading, isError } = useUser();
  console.log(data, isLoading, isError);

  useEffect(() => {
    if (!isLoading && (!data || isError)) {
      router.replace("/");
    }
  }, [isLoading, data]);

  if (isLoading) {
    return (
      <p>
        <PuffLoader color="#28a745" />
      </p>
    );
  }
  return <>{children}Hi</>;
};

export default AuthProvider;
