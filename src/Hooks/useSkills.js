import React, { useEffect, useState } from "react";

const useSkills = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((skills) => setData(skills));
  }, []);

  return [data, setData];
};

export default useSkills;
