import { useContext } from 'react';

import { Background, Form, Header } from './containers'
import { StepButton } from './components'
import { FormContext } from './context';

import steps from './datas/steps';

import './App.css';

function App() {
  const { currentStep, goToNextStep, goToPrevStep } = useContext(FormContext)
  return (
    <div className="App">
      <Background />
      <div className='App-content'>
        <Header />
        <Form />
        <footer className='section'>
          <div>
            Back To Login
          </div>
          <nav>
            {(steps.length > 1 && currentStep > 0) &&
              <StepButton
                text="Previous Step"
                type="prev"
                handleClick={goToPrevStep}
              />
            }

            {(steps.length > 1 && currentStep < steps.length - 1) &&
              <StepButton
                text='Next Step'
                type="next"
                handleClick={goToNextStep}
              />
            }
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default App;
