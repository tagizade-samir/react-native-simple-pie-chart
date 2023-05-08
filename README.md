# react-native-simple-pie-chart

[![npm version](https://img.shields.io/npm/v/react-native-simple-pie-chart)](https://www.npmjs.com/package/react-native-simple-pie-chart)
[![npm downloads](https://img.shields.io/npm/dt/react-native-simple-pie-chart?logo=npm)](https://www.npmjs.com/package/react-native-simple-pie-chart)
[![license](https://img.shields.io/npm/l/react-native-simple-pie-chart)](https://github.com/aidin36/react-native-simple-pie-chart/blob/master/LICENSE)

Simple pie chart module for both Android and iOS with optional dashes and middle component if needed.

## Installation

You need to have `react`, `react-native` and `react-native-svg` as your app's dependencies. If you had trouble installing `react-native-svg`, refer to the project's documentation: https://www.npmjs.com/package/react-native-svg.

Then install this package with:

```bash
  npm install react-native-pie-chart --save
```

or

```bash
  yarn add react-native-pie-chart
```

## Basic usage

```javascript
  import { PieChart } from 'react-native-simple-pie-chart'

  const data = [
    { amount: 10, color: '#378d68' },
    { amount: 20, color: '#a75d46' },
  ]

  export const Main() => {
    return (
      <PieChart data={data} />
    )
  }
```

With this you'll get the following result


<img src="https://raw.githubusercontent.com/tagizade-samir/react-native-simple-pie-chart/master/assets/default.png" width="200" />

## Props

| Key | Data type | Default value? | Description |
|-----|-----------|----------------|-------------|
| `data` | `Array of objects (described below)` | Required | Data array from which we calculate and show the chart |
| `max` | `number` | Will be calculated from `data` | Maximum amount to calculate percentages of each individual pies |
| `backgroundColor` | `string` | `#b5e48c` | Background color of the pie chart in the background |
| `withDashes` | `boolean` | `false` | Indicates if we have dashes on pie chart |
| `dashesAmount` | See below | 25 | Indicates how many dashes we have |
| `center` | `ReactNode` | `undefined` | If present, will be rendered in the center of our pie chart |

Where `dashesAmount` can be one of the following: `10, 20, 25, 50, 100`

The required `data` array must contain objects with the following options:

| Key | Data type | Default value? | Description |
|-----|-----------|----------------|-------------|
| `amount` | `number` | Required. | Will be used to calculate percentage of pie chart with comparison with `max` value. And if we don't have `max` value, this prop will be used to calculate maximum possible amount |
| `color` | `string` | Random color from this libraries color palette | The color of the pie chart. |
