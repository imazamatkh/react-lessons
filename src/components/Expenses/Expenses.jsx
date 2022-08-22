import './Expenses.css'

import ExpenseItem from '../ExpenseItem/ExpenseItem'

function Expenses(props) {
  return (
    <div className={'expenses'}>
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        price={props.expenses[0].price}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        price={props.expenses[1].price}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        price={props.expenses[2].price}
      />
    </div>
  )
}

export default Expenses
