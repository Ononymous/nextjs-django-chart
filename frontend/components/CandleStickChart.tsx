import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { fetchCandleStick, selectCandleStick, selectCandleStickError, selectCandleStickLoading } from '@/lib/features/candleStick/candleStickSlice'

export default function CandleStickChart () {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectCandleStick)
  const loading = useAppSelector(selectCandleStickLoading)
  const error = useAppSelector(selectCandleStickError)

  useEffect(() => {
    if (loading === false) {
      dispatch(fetchCandleStick())
    }
  }, [loading, dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>CandleStick Chart Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}