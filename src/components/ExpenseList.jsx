import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expenses, getExpenses}) => {
    return (
    <div>
        {expenses != undefined && expenses.length > 0 
        && expenses.map(expense => <ExpenseItem expense={expense} getExpenses={getExpenses} />)}
    </div>
  )
}

export default ExpenseList