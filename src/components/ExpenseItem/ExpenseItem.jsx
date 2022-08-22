import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate/ExpenseDate'
import ExpenseDescription from './ExpenseDescription/ExpenseDescription'

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <ExpenseDescription title={props.title} price={props.price} />
    </div>
  )
}

export default ExpenseItem