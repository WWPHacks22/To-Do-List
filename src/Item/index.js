import './index.css';

function Item({ text, completed, id, toggleHandler, deleteHandler }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        id={`item ${id}`}
        className="item-check"
        checked={completed}
        onChange={() => toggleHandler(id)}
      />
      <label htmlFor={`item ${id}`} className="item-text">
        {text}
      </label>
      <button className="remove" onClick={() => deleteHandler(id)}>
        <img src="icons/close.svg" alt="X" />
      </button>
    </div>
  );
}

export default Item;