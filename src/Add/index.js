import './index.css';

import { useState } from 'react';

function Add({ addHandler }) {
  const [text, setText] = useState();

  function changeHandler(event) {
    setText(event.target.value);
  }

  return (
    <div className="add-container">
      <input
        type="text"
        placeholder="Add a note..."
        value={text}
        onChange={changeHandler}
      />
      <button className="add-button" onClick={() => addHandler(text)}>
        <img src="icons/add.svg" alt="Add" />
      </button>
    </div>
  );
}

export default Add;
