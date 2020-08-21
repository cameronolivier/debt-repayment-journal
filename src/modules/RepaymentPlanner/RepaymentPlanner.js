import React from 'react'
import { generateRepaymentSchedule } from './RepaymentPlanner.utils'

const RepaymentPlanner = () => {
  // TODO: 1. Given a debt amount, with interest and a repayment amount, print out all the months it would take to pay the debt off.
  // TODO: Install intl for number formatting

  const debts = [
    {amount: 60000, annualRate: 0.17, installment: 2700},
    {amount: 75000, annualRate: 0.15, installment: 2100},
    {amount: 100000, annualRate: 0.12, installment: 2900},
  ]

  const debtSchedules = debts.map(generateRepaymentSchedule)

  return (
    <div>
      {debtSchedules.map( debt => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', margin: '0 20px' }}>
          {debt.repayments.map(
            (payment, i) => (
              <div key={i*payment} style={{ border:'1px solid grey', margin: '4px', padding: '10px' }}>
                Month {i+1}: R {payment}
              </div>
            )
          )}
          <div  style={{ border:'1px solid grey', margin: '4px', padding: '10px', background: '#282c3422' }}>Remainder: R {debt.remainder}</div>
        </div>
      ))}
    </div>
  )
}

export default RepaymentPlanner
