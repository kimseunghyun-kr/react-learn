import { useState } from 'react';
import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
  const { count, increment, decrement, multiAdd } = useCounter(initialCount);
  const [ valueToAdd, setNumber ] = useState(0)
  const handleChange = (event) => {
    setNumber(parseInt(event.target.value))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    multiAdd(valueToAdd)
  }
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <form onSubmit={handleSubmit}>
        <input value={valueToAdd || ''}
         type='number'
          onChange={handleChange}
          className ="p-1 m-3 bg-gray-50 border border-gray-300"></input>
        <Button type="submit">Add A lot</Button>
      </form>
    </div>
  );
}

export default CounterPage;
