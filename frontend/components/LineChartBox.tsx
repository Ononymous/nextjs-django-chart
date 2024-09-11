'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchLineChart, selectLineChart, selectLineChartError, selectLineChartLoading } from '@/lib/features/lineChart/lineChartSlice'

import LineChart from './LineChart'

export default function LineChartBox () {
  const dispatch = useAppDispatch()

  // Get the data from the store
  const data = useAppSelector((state) => selectLineChart(state) as { data: number[], labels: string[] })
  const loading = useAppSelector((state) => selectLineChartLoading(state) as boolean)
  const error = useAppSelector((state) => selectLineChartError(state) as string)

  // Fetch the data on component mount
  useEffect(() => {
    dispatch(fetchLineChart())
  }, [dispatch])

  // Show loading or error message if needed
  if (loading) return <div className='h-96 flex items-center justify-center'>Loading...</div>
  if (error) return <div className='h-96 flex items-center justify-center'>Error: {error}</div>

  return (
    <div>
      <LineChart data={data.data} labels={data.labels} />
    </div>
  )
}