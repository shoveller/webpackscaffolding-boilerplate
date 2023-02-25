import { useState } from 'react';
import testPng from '../assets/test.png';
import t1 from '@/test.png'
import testSvg from '../assets/react.svg';
import { ReactComponent as TestSvgComponent } from '../assets/react.svg';


const App = ({ message: initialMessage }) => {
  const [message] = useState(initialMessage ?? 'hello React *^^*');


  return (
    <div className="App">
      <h1>{message}</h1>
      {testPng}
      <img src={t1}></img>
      {testSvg}
      <TestSvgComponent></TestSvgComponent>
      
    </div>
  );
};

export default App;
