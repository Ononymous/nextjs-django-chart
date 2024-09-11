import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function PieChart({ data, labels }: { data: number[]; labels: string[] }) {
  const options = {
    chart: {
      id: 'basic-pie',
      toolbar: {
          show: false,
      },
      zoom: {
          enabled: false,
      },
    },
    labels: labels,
  };

  return (
    <div>
      <Chart options={options} series={data} type="pie" height={350}/>
    </div>
  );
}