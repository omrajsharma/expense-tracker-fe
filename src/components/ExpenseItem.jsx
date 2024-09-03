import React from 'react'

const ExpenseItem = ({expense, getExpenses}) => {
    const deleteExpense = (expenseId) => {
        fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/expenses/${expenseId}`, {
            method: 'DELETE'
        })
        .then (response => getExpenses())
    }

  return (
    <div className='expense-item'>
        <p className='expense-item-description'>{expense.description}</p>
        <p className='expense-item-amount'>{expense.amount}</p>
        <button onClick={() => deleteExpense(expense._id)}>❌</button>
    </div>
  )
}

export default ExpenseItem