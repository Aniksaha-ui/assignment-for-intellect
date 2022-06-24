import React from "react";
import { BarChart } from "recharts";
import useIncome from "../../Hooks/useIncome";
import ChartBar from "./ChartBar";
import ChartPie from "./ChartPie";

const Chart = () => {
  const [data, setData] = useIncome();
  console.log(data);
  return (
    <div className="container">
      <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-5 g-3">
        <div className="col">
          <div class="p-3 border bg-light">
            <ChartPie data={data} />
          </div>
        </div>

        <div className="col">
          <div class="p-3 border bg-light">
            <ChartBar data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
