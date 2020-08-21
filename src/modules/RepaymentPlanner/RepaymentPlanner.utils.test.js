import * as SUT from './RepaymentPlanner.utils'

describe('modules/RepaymentPlanner/RepaymentPlanner.utils', () => {
  describe('getMonthlyRate', () => {
    it('should return the monthly rate', () => {
      const result = SUT.getMonthlyRate(0.12)
      expect(result).toBe('1.01')
    })
  })
  describe('getNewOutstandingAmount', () => {
    it('should return the monthly rate', () => {
      const result = SUT.getNewOutstandingAmount(100, 1.10, 10)
      expect(result).toBe('100')
    })
  })
  describe('formatAsCurrencyValue', () => {
    it('should return the monthly rate', () => {
      const result = SUT.formatAsCurrencyValue(10.1234)
      expect(result).toBe('10.12')
    })
  })
  describe('getRemainder', () => {
    it('should return the monthly rate', () => {
      const result = SUT.getRemainder(100, 50)
      expect(result).toBe('50.00')
    })
  })
  describe('generateRepaymentSchedule', () => {
    it('should return expected title', () => {
      const expected = {
        repayments: [
          '91.00',
          '81.91',
          '72.73',
          '63.46',
          '54.09',
          '44.63',
          '35.08',
          '25.43',
          '15.68',
          '5.84',
        ],
        remainder: '4.16',
      }
      expect(SUT.generateRepaymentSchedule({amount: 100, annualRate: 0.12, installment: 10})).toEqual(expected)
    })
  })
})
