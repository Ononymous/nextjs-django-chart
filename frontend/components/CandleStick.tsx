import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CandleStick({ data }: { data: { x: string; open: number; high: number; low: number; close: number }[]}) {
  const options = {
    chart: {
      id: 'candlestick',
      toolbar: {
          show: false,
      },
      zoom: {
          enabled: false,
      },
    },
  };

  const series = [{
    name: 'candle-1',
    data: data.map((d) => ({
      x: (new Date(d.x)).toDateString(),
      y: [d.open, d.high, d.low, d.close],
    })),
  }];

  return (
    <div>
      <Chart options={options} series={series} type="candlestick" height={350}/>
    </div>
  );
}