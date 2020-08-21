import Big from 'big.js'

export const getMonthlyRate = (annualRate) => Big(annualRate).div(12).add(1).toString()
export const getNewOutstandingAmount = (amount, monthlyRate, installment) => Big(amount).times(monthlyRate).minus(installment).toString()
export const formatAsCurrencyValue = (amount) => Big(amount).toFixed(2).toString()
export const getRemainder = (installment, amount) => Big(installment).minus(amount).toFixed(2).toString()

export const generateRepaymentSchedule = ({ amount, annualRate, installment }) => {
  let _amount = Big(amount)
  const _annualRate = Big(annualRate)
  const repayments = []
  while (installment < _amount) {
    const monthlyRate = getMonthlyRate(_annualRate)
    _amount = getNewOutstandingAmount(_amount, monthlyRate, installment)
    repayments.push(formatAsCurrencyValue(_amount))

    if (!!repayments[1] && repayments[0] < repayments[1]) {
      // TODO: throw error - loan will never be repaid as interest > installment.
      break
    }
  }

  const data = {
    amount: Big(amount).toFixed(2).toString(),
    annualRate: Big(annualRate).toFixed(2).toString(),
    installment: Big(installment).toFixed(2).toString(),
  }

  const remainder = getRemainder(installment, _amount)
  return { data, repayments, remainder }
}
