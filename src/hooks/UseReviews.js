import { useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [spinner, setSpinner] = useState(true);
  fetch("https://bicycle-pars-tanvir-alam625.onrender.com/reviews")
    .then((res) => res.json())
    .then((data) => {
      const myReviews = data.reverse();
      setReviews(myReviews);
      setSpinner(false);
    });

  return [reviews, spinner];
};
export default useReviews;
