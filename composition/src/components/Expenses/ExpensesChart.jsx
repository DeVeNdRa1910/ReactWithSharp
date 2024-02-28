import React from 'react'
import Chart from '../Chart/Chart'

function ExpensesChart(props) {

    const chartDataPoints = [
        {label: 'Jan' , value: 0},
        {label: 'Feb' , value: 1},
        {label: 'March' , value: 2},
        {label: 'April' , value: 3},
        {label: 'May' , value: 4},
        {label: 'Jun' , value: 5},
        {label: 'July' , value: 6},
        {label: 'Aug' , value: 7},
        {label: 'Sept' , value: 8},
        {label: 'Oct' , value: 9},
        {label: 'Nov' , value: 10},
        {label: 'Dec' , value: 11},
    ];

    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth() // start 0 -> jan
        chartDataPoints[expenseMonth].value += expense.amount;
    }

  return (
    <div>
      <Chart dataPoints={chartDataPoints}/>
    </div>
  );
}

export default ExpensesChart