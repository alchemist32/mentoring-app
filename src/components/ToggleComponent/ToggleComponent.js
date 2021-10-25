import React from 'react';
import Context from '../../Context';
import './ToggleComponent.css';

function ToggleComponent({ active: boolean }) {
  const { setThemeDark, themeDark } = React.useContext(Context);
  const changeHandler = (event) => setThemeDark(event.target.checked);

  return (
    <div className="toggle-container">
      <p>Set Dark Theme</p>
      <label htmlFor="dark-mode">
        <span
          className="rail"
          style={
            !themeDark
              ? { backgroundColor: '#333333' }
              : { backgroundColor: '#fff' }
          }
        >
          <span
            className={themeDark ? 'pill pill-swipe dark-pill' : 'pill'}
          ></span>
        </span>
      </label>
      <input type="checkbox" id="dark-mode" onChange={changeHandler} hidden />
    </div>
  );
}

export default ToggleComponent;
