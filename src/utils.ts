import { PieChartItem, IGeneratedPieItem, DASHES_AMOUNT } from './types'
import { DEFAULT } from './constants'

const { DASHES_MAPPING, COLORS } = DEFAULT

const getDashesAmount = (amount: DASHES_AMOUNT, withDashes?: boolean) => {
  if (withDashes) {
    const margin = DASHES_MAPPING[amount]

    return 100 / (100 * (margin.dash + margin.space))
  }

  return 0
}

const getOffsetPercent = (percent: number) => (360 * (percent * 100)) / 100

const getPiePercent = (percent: number, overallPercent: number) => {
  if (overallPercent > 1) return percent - (overallPercent - 1)

  return percent
}

const generateMainPie = (
  data: PieChartItem[],
  max?: number,
  withDashes?: boolean,
  dashesAmount: DASHES_AMOUNT = DASHES_AMOUNT._25,
): [IGeneratedPieItem[], IGeneratedPieItem[]] => {
  let pieAngle = 0
  let dashesAngle = 0
  let overallPercent = 0
  let nextPieIndex = 1

  const pies: IGeneratedPieItem[] = []
  const dashes: IGeneratedPieItem[] = []

  const dashesPercent = getDashesAmount(dashesAmount, withDashes)
  const maxValue = max ?? data.reduce((prev, curr) => prev + curr.amount, 0)

  for (let id = 0; id <= data.length - 1; id++) {
    if (overallPercent > 1) break

    const angle = pieAngle
    const piePercent = parseFloat((data[id].amount / maxValue).toFixed(3))

    const offsetPercent = getOffsetPercent(piePercent)

    pieAngle += offsetPercent
    overallPercent += piePercent

    pies.push({
      id,
      percent: getPiePercent(piePercent, overallPercent),
      color: data[id].color ?? COLORS[id],
      angle,
    })
  }

  for (let i = 1; i <= dashesPercent; i++) {
    const angle = dashesAngle
    const offsetPercent = getOffsetPercent(
      DASHES_MAPPING[dashesAmount].dash + DASHES_MAPPING[dashesAmount].space,
    )
    const currentPieItem = pies[nextPieIndex - 1] ?? pies.at(-1)
    const nextPieItem = pies[nextPieIndex] ?? pies.at(-1)

    dashesAngle += offsetPercent

    if (dashesAngle >= nextPieItem?.angle - 1 && nextPieIndex < pies.length) {
      nextPieIndex++
    }

    dashes.push({
      id: i,
      color: currentPieItem?.color ?? '#6c757d',
      percent: DASHES_MAPPING[25].dash,
      angle,
    })
  }

  return [pies, dashes]
}

export { generateMainPie }
