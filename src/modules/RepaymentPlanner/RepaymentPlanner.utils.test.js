import * as SUT from './RepaymentPlanner.utils'

describe('modules/RepaymentPlanner/RepaymentPlanner.utils', () => {

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
