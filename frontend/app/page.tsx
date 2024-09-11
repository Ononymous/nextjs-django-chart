import React from 'react'
import LineChart from '@/components/LineChartBox'
import BarChart from '@/components/BarChartBox'
import PieChart from '@/components/PieChartBox'
import CandleStick from '@/components/CandleStickBox'

const HomePage = () => {
  return (
    <div>
      <h1>Charts Dashboard</h1>
      <LineChart />
      <BarChart />
      <PieChart />
      <CandleStick />
    </div>
  )
}

export default HomePage