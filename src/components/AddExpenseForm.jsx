import React, { useState } from 'react'

const AddExpenseForm = ({toggleFormVisibility, getExpenses}) => {
    const [formData, setFormData] = useState({
        description: "",
        category: "",
        amount: null,
        date: null
    })

    const handleInput = e => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/expenses`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            toggleFormVisibility();
            getExpenses();
        })
    }

  return (
    <div className='add-expense-form'>
        <form onSubmit={handleSubmit}>
            <div>
                <input  type="text" onChange={handleInput} placeholder='Description' name='description' value={formData.description} />
            </div>
            <div>
                <input  type="text" onChange={handleInput} placeholder='Category' name='category' value={formData.category} />
            </div>
            <div>
                <input  type="number" onChange={handleInput} placeholder='Amount' name='amount' value={formData.amount} />
            </div>
            <div>
                <input  type="date" onChange={handleInput} placeholder='Date' name='date' value={formData.date} />
            </div>
            <button className='add-form-btn'>Add</button>
        </form>
    </div>
  )
}

export default AddExpenseForm