import { useContext } from 'react';

import { Background, Footer, Form, Header } from './containers'

import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <div className='App-content'>
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
