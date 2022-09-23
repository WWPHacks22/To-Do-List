import './index.css';

import { useState } from 'react';

/* get whatever's passed in the addHandler prop
 * eg, in <Add addHandler="billy"></Add>,
 * addHandler would be equal to "billy"
 */
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
      {/* when the add button is clicked,
       call (run) whatever was passed to the addHandler prop, 
       and also pass in the text state */}
      <button className="add-button" onClick={() => addHandler(text)}>
        <img src="icons/add.svg" alt="Add" />
      </button>
    </div>
  );
}

export default Add;
