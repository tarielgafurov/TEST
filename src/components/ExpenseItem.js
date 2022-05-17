import {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props){
     const [text , setTitle] = useState(props.text)
    function ChangeTitleHandler () {
        setTitle('Hello')
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{text}</h2>
                <div className='expense-item__price'>{props.price}</div>
            </div>
            <button onClick={ChangeTitleHandler}>Change</button>
        </div>
    )
}

export default ExpenseItem