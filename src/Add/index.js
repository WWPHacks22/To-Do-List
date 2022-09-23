// import styles
import './index.css';

import { useState } from 'react';

function Add() {
  // https://reactjs.org/docs/forms.html#:~:text=called%20%E2%80%9Ccontrolled%20components%E2%80%9D.-,Controlled%20Components,-In%20HTML%2C%20form
  // This is a "controlled input"

  // Use the `text` constant to work with the value of `text`
  // and use the setText function to update the value of `text`
  const [text, setText] = useState();

  // set any changes in the input to the value of `text`
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
      {/* Take note of this path. It's relative to the public folder
      ie the relative path from the root of the repository would be "public/icons/add.svg" */}
      <button className="add-button">
        <img src="icons/add.svg" alt="Add" />
      </button>
    </div>
  );
}

export default Add;
