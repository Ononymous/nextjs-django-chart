import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function BarChart({ data, labels }: { data: number[]; labels: string[] }) {
  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: {
          show: false,
      },
      zoom: {
          enabled: false,
      },
    },
    xaxis: {
      categories: labels,
    },
  };

  const series = [
    {
      name: 'bar-1',
      data: data,
    },
  ];

  return (
    <div>
      <Chart data-testid={"basic-bar"} options={options} series={series} type="bar" height={350}/>
    </div>
  );
}