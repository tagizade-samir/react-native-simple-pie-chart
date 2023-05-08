interface PieChartItem {
  amount: number
  color?: string
}

interface IGeneratedPieItem {
  id: number
  percent: number
  color?: string
  angle: number
}

enum DASHES_AMOUNT {
  _10 = 10,
  _20 = 20,
  _25 = 25,
  _50 = 50,
  _100 = 100,
}

interface IDashMap {
  dash: number
  space: number
}

export type { PieChartItem, IGeneratedPieItem, IDashMap }

export { DASHES_AMOUNT }
