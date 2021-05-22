import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import { getData } from "./utils";

import { TypeChooser } from "react-stockcharts/lib/helper";

export default function ChartComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      console.log("data", data);
      setData(data);
    });
  });

  if (data.length == 0) {
    return <div>Loading...</div>;
  } else {
    console.log("not loading", data);
    return (
      <TypeChooser>{(type) => <Chart type={type} data={data} />}</TypeChooser>
    );
  }
}
