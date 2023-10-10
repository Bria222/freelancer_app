/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'

const TransactionChargesSummary = () => {
  useEffect(() => {
    const data2 = [
      { value: '170.00', label: 'Airtime' },
      { value: '5.00', label: 'Redeemed Loyalty Points' },
      { value: '23.20', label: 'SMS' },
      { value: '38.00', label: 'WhatsApp' },
      { value: '33.37', label: 'Service Fee' },
    ]

    const labels2 = data2.map((entry) => entry.label)
    const values2 = data2.map((entry) => entry.value)
    const colors2 = ['556ee6', 'f1b44c', 'f46a6a', '50a5f1', '34c38f']

    const getRandomColor2 = () => {
      const randomIndex = Math.floor(Math.random() * colors2.length)
      return '#' + colors2[randomIndex]
    }

    const backgroundColors2 = values2.map(() => getRandomColor2())

    const data3 = {
      labels: labels2,
      datasets: [
        {
          data: values2,
          backgroundColor: backgroundColors2,
        },
      ],
    }

    const ctx2 = document.getElementById('charges_summary').getContext('2d')

    const myChart2 = new Chart(ctx2, {
      type: 'doughnut',
      data: data3,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })

    return () => {
      myChart2.destroy()
    }
  }, [])

  return (
    <div className='col-xl-6'>
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title mb-4'>Transaction Charges Summary</h4>
          <small>Summary of all debit transactions for your account.</small>
          <div id='charges_chartContainer' style={{ height: '400px' }}>
            <canvas id='charges_summary'></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionChargesSummary
