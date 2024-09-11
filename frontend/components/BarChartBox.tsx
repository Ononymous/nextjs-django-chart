'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchBarChart, selectBarChart, selectBarChartError, selectBarChartLoading } from '@/lib/features/barChart/barChartSlice'

export default function BarChartBox () {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectBarChart)
  const loading = useAppSelector(selectBarChartLoading)
  const error = useAppSelector(selectBarChartError)

  useEffect(() => {
    dispatch(fetchBarChart())
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>BarChart Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}