import React, { useEffect, useState } from 'react'
import ExpenseList from './components/ExpenseList';
import './App.css';
import AddExpense from './components/AddExpense';

const App = () => {
  const [expenses, setExpenses] = useState();

  useEffect(() => {
    getExpenses();
  }, [])

  const getExpenses = () => {
    fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/expenses`)
    .then(response => response.json())
    .then(data => setExpenses(data))
  }

  /**
   * useEffect
   * 1. Always execute callback for first render
   * 2. It rerender callback on depencency updatation
   * 3. Dependancy should be a stateful variable (react state)
   */

  /**
   * useState function
   * 1. update state
   * 2. rerender component
   */

  return (
    <div className='app'>
      <ExpenseList expenses={expenses} getExpenses={getExpenses} />
      <AddExpense getExpenses={getExpenses} />
    </div>
  )
}

export default App