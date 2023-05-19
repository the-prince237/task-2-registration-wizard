import { Background, Form, Header } from './containers'
import { StepButton } from './components'

import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <div className='App-content'>
        <Header />
        <Form />
        <footer>
          <StepButton />
          <StepButton />
        </footer>
      </div>
    </div>
  );
}

export default App;
