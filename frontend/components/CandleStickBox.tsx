'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchCandleStick, selectCandleStick, selectCandleStickError, selectCandleStickLoading } from '@/lib/features/candleStick/candleStickSlice'

import CandleStick from './CandleStick'

export default function CandleStickBox () {
  const dispatch = useAppDispatch()

  // Get the data from the store
  const data = useAppSelector((state) => selectCandleStick(state) as { data: { x: string, open: number, high: number, low: number, close: number }[] })
  const loading = useAppSelector((state) => selectCandleStickLoading(state) as boolean)
  const error = useAppSelector((state) => selectCandleStickError(state) as string)

  // Fetch the data on component mount
  useEffect(() => {
    dispatch(fetchCandleStick())
  }, [dispatch])

  // Show loading or error message if needed
  if (loading) return <div className='h-96 flex items-center justify-center'>Loading...</div>
  if (error) return <div className='h-96 flex items-center justify-center'>Error: {error}</div>

  return (
    <div>
      <CandleStick data={data.data}/>
    </div>
  )
}