import Expenses from './components/Expenses';

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
