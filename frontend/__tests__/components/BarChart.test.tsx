import React from 'react'
import { http, HttpResponse, delay } from 'msw'
import { setupServer } from 'msw/node'
import { fireEvent, screen, act, waitFor } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../utils/test-utils'
import BarChart from '@/components/BarChart'

// failed to create unit testing for frontend, for React-ApexCharts seems to be breaking the unit testing environment
// reference: https://github.com/testing-library/react-testing-library/issues/1116
// reference: https://github.com/apexcharts/react-apexcharts/issues/427

const mockData = [1, 2, 3, 4, 5]
const mockLabels = ['A', 'B', 'C', 'D', 'E']


test('render with no data', async () => {
    renderWithProviders(<BarChart data={[]} labels={[]}/>)
  
    // should show no user initially, and not be fetching a user
    const chart = screen.getByTestId('basic-bar')
    expect(chart).toBeInTheDocument()
})