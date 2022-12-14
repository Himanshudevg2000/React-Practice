import ExpenseItem from "./components/Expenses/ExpenseItem";
import Items from "./components/items";
import NewExpense from "./components/newExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(),
      LocationOfExpenditure: 'Shop'
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(),
      LocationOfExpenditure: 'Online'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 3,12),
      LocationOfExpenditure: 'Showroom'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 3,12),
      LocationOfExpenditure: 'Shop'
    },
  ];

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense/>
      <ExpenseItem
        title = {expenses[0].title}
        amount={expenses[0].amount}
        date = {expenses[0].date}
      />
      <ExpenseItem
        title = {expenses[1].title}
        amount={expenses[1].amount}
        date = {expenses[1].date}
      />
      <ExpenseItem
        title = {expenses[2].title}
        amount={expenses[2].amount}
        date = {expenses[2].date}
      />
      <ExpenseItem
        title = {expenses[3].title}
        amount={expenses[3].amount}
        date = {expenses[3].date}
      />
    </div>
  );
}

export default App;
