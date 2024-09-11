import React from 'react'
import LineChart from '@/components/LineChartBox'
import BarChart from '@/components/BarChartBox'
import PieChart from '@/components/PieChartBox'
import CandleStick from '@/components/CandleStickBox'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4">
        <h1 className="text-white text-3xl font-bold">Charts Dashboard</h1>
      </nav>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <LineChart />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <BarChart />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <PieChart />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <CandleStick />
        </div>
      </div>
    </div>
  )
}

export default HomePage