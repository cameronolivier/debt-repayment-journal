import React from 'react'
import { generateRepaymentSchedule } from './RepaymentPlanner.utils'

const RepaymentPlanner = () => {
  // TODO: 1. Given a debt amount, with interest and a repayment amount, print out all the months it would take to pay the debt off.
  // TODO: Install intl for number formatting

  const debts = [
    {amount: 100, annualRate: 0.12, installment: 10},
    {amount: 75000, annualRate: 0.15, installment: 2100},
    {amount: 100000, annualRate: 0.12, installment: 2900},
    {amount: 150000, annualRate: 0.125, installment: 1800},
  ]

  const debtSchedules = debts.map(generateRepaymentSchedule)

  const gridTemplateColumnsStyle = `repeat(${debts.length}, 1fr)`
  return (
    <div style={{ display: 'grid', gridTemplateColumns: gridTemplateColumnsStyle, margin: '0 20px' }}>
      {debtSchedules.map( (debt, j) => (
        <div key={j.toString + (debt.remainder)} >
          <div>Amount: R {debt.data.amount}</div>
          <div>Rate: {debt.data.annualRate * 100}%</div>
          <div>Installment: R {debt.data.installment}</div>
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
