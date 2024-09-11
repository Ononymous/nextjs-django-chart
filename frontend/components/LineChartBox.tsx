'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchLineChart, selectLineChart, selectLineChartError, selectLineChartLoading } from '@/lib/features/lineChart/lineChartSlice'

import LineChart from './LineChart'

export default function LineChartBox () {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => selectLineChart(state) as { data: number[], labels: string[] })
  const loading = useAppSelector((state) => selectLineChartLoading(state) as boolean)
  const error = useAppSelector((state) => selectLineChartError(state) as string)

  useEffect(() => {
    dispatch(fetchLineChart())
  }, [dispatch])

  if (loading) return <div className='h-96 flex items-center justify-center'>Loading...</div>
  if (error) return <div className='h-96 flex items-center justify-center'>Error: {error}</div>

  return (
    <div>
      <LineChart data={data.data} labels={data.labels} />
    </div>
  )
}