'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchPieChart, selectPieChart, selectPieChartError, selectPieChartLoading } from '@/lib/features/pieChart/pieChartSlice'

import PieChart from './PieChart'

export default function PieChartBox () {
  const dispatch = useAppDispatch()

  // Get the data from the store
  const data = useAppSelector((state) => selectPieChart(state) as { data: number[], labels: string[] })
  const loading = useAppSelector((state) => selectPieChartLoading(state) as boolean)
  const error = useAppSelector((state) => selectPieChartError(state) as string)

  // Fetch the data on component mount
  useEffect(() => {
    dispatch(fetchPieChart())
  }, [dispatch])

  // Show loading or error message if needed
  if (loading) return <div className='h-96 flex items-center justify-center'>Loading...</div>
  if (error) return <div className='h-96 flex items-center justify-center'>Error: {error}</div>

  return (
    <div>
      <PieChart data={data.data} labels={data.labels} />
    </div>
  )
}