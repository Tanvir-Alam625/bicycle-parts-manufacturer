import { useQuery } from "react-query";

const usePartes = () => {
  const {
    isLoading,
    data: parts,
    refetch,
  } = useQuery("parts", () =>
    fetch(`https://bicycle-pars-tanvir-alam625.onrender.com/tools`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json())
  );
  return [parts, isLoading, refetch];
};
export default usePartes;
