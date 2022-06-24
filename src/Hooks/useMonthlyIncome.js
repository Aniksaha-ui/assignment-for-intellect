import React, { useEffect, useState } from "react";

const useMonthlyIncome = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("monthlyincome.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data, setData];
};

export default useMonthlyIncome;
