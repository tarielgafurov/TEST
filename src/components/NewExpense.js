import ExpenseForm from "./ExpenseForm"

function NewExpense (props) {
    function saveData (date) {
        const dateWithId = {
            ...date,
            id : Math.random().toString(),
        }

        props.saveDateToList(dateWithId)
    }
    return (
        <div>
            <ExpenseForm onSaveData={saveData}/>
        </div>
    )
}

export default NewExpense