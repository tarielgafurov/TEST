import ExpenseItem from "./ExpenseItem"
import Card from "./UI/Card"
import './ExpensesList.css'

function ExpensesList(props) {
    return (
         <Card className="expenses">
              {props.expenses.map((el , ) => {
        return <ExpenseItem key={el.id} 
        date={el.date} text={el.title} 
        price={el.amount}/>
      })}
         </Card>
    )
}

export default ExpensesList