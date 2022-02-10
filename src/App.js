import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (
    <section className='container'>
      <h3>0 birthdays today</h3>
      <List />
      <button type='button' onClick={() => console.log('you clicked me')}>
        Clear Birthdays
        </button>
    </section>
  )
}

export default App;