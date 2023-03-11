import { useState } from "react";
import { useQuery } from "react-query";

const usePartes = () => {
  const {
    isLoading,
    error,
    data: parts,
    refetch,
  } = useQuery("parts", () =>
    fetch(`https://bicycle-pars-server-side.vercel.app/tools`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json())
  );
  return [parts, isLoading, refetch];
};
export default usePartes;
