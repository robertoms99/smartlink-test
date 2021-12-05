import { formatPrice, getDateFromParam } from './util'

describe('prueba de funcion formateo', () => {
  const TEST_CASES = [
    {
      label: 'test con centesimas',
      expectedResult: '200.45',
      entry: [200.45, 'USD']
    },
    {
      label: 'test con milesimas',
      expectedResult: '12,222.2',
      entry: [12222.2, 'USD']
    }
  ]

  TEST_CASES.forEach((testCase) => {
    it(testCase.label, () => {
      const [price, currency] = testCase.entry
      const result = formatPrice(price as number, currency as string)
      expect(result).toBe(testCase.expectedResult)
    })
  })
})

describe('prueba funcion fecha pasadas en params', () => {
  const TEST_CASES = [
    {
      label: 'test con fecha 2020',
      expectedResult: '2020-04-13',
      entry: '130420'
    },
    {
      label: 'test con fecha de 2022',
      expectedResult: '2022-01-01',
      entry: '010122'
    }
  ]

  TEST_CASES.forEach((testCase) => {
    it(testCase.label, () => {
      const result = getDateFromParam(testCase.entry)
      expect(result).toBe(testCase.expectedResult)
    })
  })
})
