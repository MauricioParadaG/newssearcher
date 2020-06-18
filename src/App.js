import React, { useState, useEffect } from 'react';
import HeaderComponent from './components/Header.component';
import FormComponent from './components/Form.component';

function App() {

  const [formCategorySearched, setFormCategorySearched] = useState('');

  useEffect(() => {
    const askingCategoryApi = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${formCategorySearched}&apiKey=3a534e2172504d91bc5a80b3cb3fb95b`;

      const res = await fetch(url);
      const data = await res.json();

      console.log(data);

    }
    askingCategoryApi();
  }, [formCategorySearched]);


  return (
    <>
      <HeaderComponent
        title='NewsSearcher.com'
      />

      <div className="container white">
              <FormComponent
              setFormCategorySearched={setFormCategorySearched}
              />
      </div>


    </>
  );
}

export default App;
