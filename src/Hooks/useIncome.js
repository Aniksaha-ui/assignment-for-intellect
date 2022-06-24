import React, { useEffect, useState } from "react";

const useIncome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("income.json")
      .then((res) => res.json())
      .then((skills) => setData(skills));
  }, []);

  return [data, setData];
};

export default useIncome;
