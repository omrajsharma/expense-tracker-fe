import React, { useState } from 'react'
import AddExpenseForm from './AddExpenseForm'

const AddExpense = ({getExpenses}) => {
    const [formVisbility, setFormVisibility] = useState(false)

    const toggleFormVisibility = () => setFormVisibility(!formVisbility);

  return (
    <div className='add-expense'>
        {formVisbility && <AddExpenseForm toggleFormVisibility={toggleFormVisibility} getExpenses={getExpenses} />}
        
        <button onClick={toggleFormVisibility} className='add-form-btn' >➕</button>
    </div>
  )
}

export default AddExpense