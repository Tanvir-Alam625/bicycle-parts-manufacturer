import { useState } from "react";
import { useQuery } from "react-query";

const usePartes = () => {
  //   fetch("https://damp-sierra-18639.herokuapp.com/tools")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setParts(data);
  //     });

  const {
    isLoading,
    error,
    data: parts,
    refetch,
  } = useQuery("parts", () =>
    fetch(`https://damp-sierra-18639.herokuapp.com/tools`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json())
  );
  return [parts, isLoading, refetch];
};
export default usePartes;
