import React, { useState, useEffect } from 'react';
import HeaderComponent from './components/Header.component';
import FormComponent from './components/Form.component';



function App() {
  return (
    <>
      <HeaderComponent
        title='NewsSearcher.com'
      />

      <div className="container white">
              <FormComponent/>
      </div>


    </>
  );
}

export default App;
