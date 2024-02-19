import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    // state scheduling
    // NOTE: If we have multiple state updates that are in the end triggered
    // simultaneously in the same function, we'll not end up with multiple
    // component function executions (like App component rendering multiple times)
    // because that would be pretty inefficient
    // So App components renders only once because React performs state batching.
    // State batching means multiple state updates that are triggered from
    // the same function are batched together and will only lead to one
    // component function execution.
    setChosenCount(newCount);
    setChosenCount((prevChosenCount) => prevChosenCount + 1);
    console.log(chosenCount); // won't work!
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
