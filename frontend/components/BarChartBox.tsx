'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchBarChart, selectBarChart, selectBarChartError, selectBarChartLoading } from '@/lib/features/barChart/barChartSlice'

import BarChart from './BarChart'

export default function BarChartBox () {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => selectBarChart(state) as { data: number[], labels: string[] })
  const loading = useAppSelector((state) => selectBarChartLoading(state) as boolean)
  const error = useAppSelector((state) => selectBarChartError(state) as string)

  useEffect(() => {
    dispatch(fetchBarChart())
  }, [dispatch])

  if (loading) return <div className='h-96 flex items-center justify-center'>Loading...</div>
  if (error) return <div className='h-96 flex items-center justify-center'>Error: {error}</div>

  return (
    <div>
      <BarChart data={data.data} labels={data.labels} />
    </div>
  )
}