'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchLineChart, selectLineChart, selectLineChartError, selectLineChartLoading } from '@/lib/features/lineChart/lineChartSlice'

export default function LineChartBox () {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectLineChart)
  const loading = useAppSelector(selectLineChartLoading)
  const error = useAppSelector(selectLineChartError)

  useEffect(() => {
    dispatch(fetchLineChart())
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>LineChart Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}