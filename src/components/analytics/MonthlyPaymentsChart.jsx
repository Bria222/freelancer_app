/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'

const MonthlyPaymentsChart = () => {
  useEffect(() => {
    const data = [
      { value: '3.00', label: 'August', year: '2023' },
      { value: '51.00', label: 'July', year: '2023' },
      { value: '2545.00', label: 'June', year: '2023' },
      { value: '1243.00', label: 'May', year: '2023' },
      { value: '19.00', label: 'April', year: '2023' },
    ]

    const labels = data.map((entry) => entry.label)
    const values = data.map((entry) => entry.value)
    const colors = ['556ee6', 'f1b44c', 'f46a6a', '50a5f1', '34c38f']

    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colors.length)
      return '#' + colors[randomIndex]
    }

    const backgroundColors = values.map(() => getRandomColor())

    const ctx = document.getElementById('monthly_summary').getContext('2d')

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Total Amount',
            data: values,
            backgroundColor: backgroundColors,
            borderColor: '#343541',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            scaleLabel: { display: true, labelString: 'Month' },
          },
          y: {
            display: true,
            beginAtZero: true,
            scaleLabel: { display: true, labelString: 'Amount: KES' },
          },
        },
      },
    })

    return () => {
      myChart.destroy()
    }
  }, [])

  return (
    <div className='col-xl-6'>
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title mb-4'>Monthly Payments Received In 2023</h4>
          <small>
            Summary of all monthly payments received in the current year.
          </small>
          <div id='chartContainer' style={{ height: '400px' }}>
            <canvas id='monthly_summary'></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyPaymentsChart
