import Add from './Add';
import Item from './Item';
import './App.css';

import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [items, setItems] = useLocalStorage('items', []);

  function addHandler(text) {
    setItems((currentItems) => [
      ...currentItems,
      { text, completed: false, id: uuidv4() },
    ]);
  }

  function deleteHandler(id) {
    setItems((currentItems) => currentItems.filter((el) => el.id !== id));
  }

  function toggleHandler(id) {
    setItems((currentItems) =>
      currentItems.map((el) => {
        console.log(el);
        if (el.id === id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  }

  return (
    <div className="App">
      <div className="top">
        <h1 className="title">Hey there, Alex!</h1>
        <div className="list">
          {items.map((item, ind, _) => {
            const text = item.text;
            const completed = item.completed;
            const id = item.id;
            return (
              <Item
                deleteHandler={deleteHandler}
                toggleHandler={toggleHandler}
                key={id}
                id={id}
                text={text}
                completed={completed}
              />
            );
          })}
        </div>
      </div>
      <Add addHandler={addHandler} />
    </div>
  );
}

export default App;
