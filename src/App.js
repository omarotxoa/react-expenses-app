import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.56,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e2',
      title: 'Grocieries',
      amount: 111.43,
      date: new Date(2021, 3, 10),
    },
    {
      id: 'e3',
      title: 'Rent',
      amount: 1111.11,
      date: new Date(2021, 3, 15),
    },
    {
      id: 'e3',
      title: 'Date Night',
      amount: 80.52,
      date: new Date(2021, 3, 17),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}></ExpenseItem>
        <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}></ExpenseItem>
        <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}></ExpenseItem>
        <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
