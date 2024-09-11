import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function LineChart({ data, labels }: { data: number[]; labels: string[] }) {
  const options = {
    chart: {
      id: 'basic-line',
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
      name: 'line-1',
      data: data,
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350}/>
    </div>
  );
}