import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm (props) {

    const [text , setText] = useState()
    const [amoint , setAmoint] = useState()
    const [date , setDate] = useState()


    function textChangeHandler(event) {
        setText(event.target.value)
    }
    function amountChangeHandler(event) {
        setAmoint(event.target.value)
    }
    function dateChangeHandler(event) {
        setDate(event.target.value)
    }

    function submitHandler (event) {
        event.preventDefault()

        const expenseDate = {
            text : text , 
            amoint : amoint, 
            date : new Date(date),
        }

        props.onSaveData(expenseDate)
    }

    return  (
        <form onSubmit={submitHandler}>
            <div className="new-expenses__controls">
                <div className="new-expense__control">
                    <lable>Title</lable>
                    <input onChange={textChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <lable>Amount</lable>
                    <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <lable>Date</lable>
                    <input onChange={dateChangeHandler} type="date" min="2021-01-01" max="2022"/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
    
}

export default ExpenseForm