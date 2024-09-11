'use client'
import React, { use, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchCandleStick, selectCandleStick, selectCandleStickError, selectCandleStickLoading } from '@/lib/features/candleStick/candleStickSlice'

import CandleStick from './CandleStick'

export default function CandleStickBox () {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => selectCandleStick(state) as { data: { x: string, open: number, high: number, low: number, close: number }[] })
  const loading = useAppSelector((state) => selectCandleStickLoading(state) as boolean)
  const error = useAppSelector((state) => selectCandleStickError(state) as string)

  useEffect(() => {
    dispatch(fetchCandleStick())
  }, [dispatch])

  if (loading) return <div className='h-96 flex items-center justify-center'>Loading...</div>
  if (error) return <div className='h-96 flex items-center justify-center'>Error: {error}</div>

  return (
    <div>
      <CandleStick data={data.data}/>
    </div>
  )
}