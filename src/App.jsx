import './App.css'

import Expenses from './components/Expenses/Expenses'

function App() {
  console.clear()

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
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
