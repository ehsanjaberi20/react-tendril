import {Fragment} from 'react';
import './App.css'
import Header from './layouts/header/Header';

function App() {
  return (
    <Fragment>
      <Header/>
      <main className='m-2'>
        <div className='text-blue-500'>ReactJs Components</div>
      </main>
      
    </Fragment>
  )
}

export default App
