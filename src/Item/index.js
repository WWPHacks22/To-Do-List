import './index.css';

function Item({ text, completed, id }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        className="item-check"
        checked={completed}
        // use id to link input with label so that we can cross out the text using CSS
        id={`item ${id}`}
      />
      {/* instead of using the for attribute used in html files, we use htmlFor  */}
      {/* this is because "for" is a keyword in JavaScript */}
      <label htmlFor={`item ${id}`} className="item-text">
        {text}
      </label>
      {/* button to remove item */}
      <button className="remove">
        <img src="icons/close.svg" alt="X" />
      </button>
    </div>
  );
}

export default Item;
