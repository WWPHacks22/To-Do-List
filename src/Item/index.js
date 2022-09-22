import './index.css';

function Item({ text, completed, id }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        id={`item ${id}`}
        className="item-check"
        checked={completed}
      />
      <label htmlFor={`item ${id}`} className="item-text">
        {text}
      </label>
      <button className="remove">
        <img src="icons/close.svg" alt="X" />
      </button>
    </div>
  );
}

export default Item;
