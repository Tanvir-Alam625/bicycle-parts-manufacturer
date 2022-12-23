import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://bicycle-pars-tanvir-alam625.onrender.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((result) => {
          setToken(result?.token);
          const token = result?.token;
          localStorage.setItem("access-token", token);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
