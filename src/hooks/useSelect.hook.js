import React, { useState } from 'react';

const useSelect = (inicialState, optionsCategories) => {

    const [state, setState] = useState(inicialState);

    const SelectNews = () => (
          <select
            className="browser-default"
            onChange={event => setState(event.target.value)}
            value={state}
          >

            {optionsCategories.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}

          </select>
    );

    return [state, SelectNews];

}

export default useSelect;
