'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchPieChart, selectPieChart, selectPieChartError, selectPieChartLoading } from '@/lib/features/pieChart/pieChartSlice'

export default function PieChartBox () {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectPieChart)
  const loading = useAppSelector(selectPieChartLoading)
  const error = useAppSelector(selectPieChartError)

  useEffect(() => {
    dispatch(fetchPieChart())
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>PieChart Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}