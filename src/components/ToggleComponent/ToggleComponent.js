import React from 'react';
import Context from '../../Context';
import './ToggleComponent.css';

function ToggleComponent({ active: boolean }) {
  const { setThemeDark } = React.useContext(Context);
  const changeHandler = (event) => setThemeDark(event.target.checked);

  return (
    <div className="toggle-container">
      <label htmlFor="dark-mode">Set dark mode</label>
      <input type="checkbox" id="dark-mode" onChange={changeHandler} />
    </div>
  );
}

export default ToggleComponent;
