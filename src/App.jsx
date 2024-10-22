import './App.css'
import Counter from './Counter';
import Friend from './friends';
import Team from './team';

import Users from './users';


function App() {
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  return (
    <>
      
      <h3>React Core Concepts 2</h3>
    <Friend></Friend>
      <Users></Users>
     <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click 2</button>

      <button onClick={() => {alert('third clicked')}}>third</button>

    </>
  )
}

export default App
