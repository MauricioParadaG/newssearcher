import React, { useState } from 'react';

const useSelect = (inicialState, optionsFiat) => {

    const [state, setState] = useState('');

    const SelectNews = () => (
          <select
            className="browser-default"
            onChange={event => setState(event.target.value)}
            value={state}
          >
            <option value="">- Select -</option>
            
          </select>
    );

    return [state, SelectNews];

}

export default useSelect;
