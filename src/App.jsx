import './App.css'

// Components imports
import ExpenseItem from './components/ExpenseItem/ExpenseItem'

function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2022, 6, 15),
      title: 'Toilet Paper',
      price: 94.12
    },
    {
      id: 'e2',
      date: new Date(2022, 7, 19),
      title: 'New TV',
      price: 799.49
    },
    {
      id: 'e3',
      date: new Date(2022, 8, 2),
      title: 'Car Insurance',
      price: 155.99
    }
  ]

  return (
    <div className="App">
      <h1>Let&apos;s get started!</h1>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price}
      />
    </div>
  )
}

export default App
