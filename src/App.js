import './App.css';
// import the components
import Item from './Item';
import Add from './Add';

import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';

function App() {
  /* Notice how easily we can update the list with minimal code!
   *
   * If we're just using HTML + JS, we would need to duplicate
   * a lot of markup. This is really good for applications
   * where we're displaying a lot of dynamic data (like from a server)
   */
  const [items, setItems] = useLocalStorage('items', []);

  function addHandler(text) {
    setItems((currentItems) => [
      ...currentItems,
      { text, completed: false, id: uuidv4() },
    ]);
  }

  function deleteHandler(id) {
    /*
     * filter returns an array with elements where the function is true
     *
     * here, we're getting all arrays where the id of those objects (el.id) do not match
     * the id that we want to delete (passed in line 25)
     *
     * (this function notation is basically shorthand for typing out the function keyword
     * , called an "arrow function")
     */
    setItems((currentItems) => currentItems.filter((el) => el.id !== id));
  }

  return (
    <div className="app">
      <div className="top">
        <h1 className="title">Hey there, Alex!</h1>
        <div className="list">
          {items.map((item) => {
            const text = item.text;
            const completed = item.completed;
            const id = item.id;
            /* notice the addition of the "key" property below
             * we need to give each element a unique key
             * so React can keep track of everything
             * otherwise, bugs can occur...
             * https://reactjs.org/docs/lists-and-keys.html
             */
            return (
              <Item
                key={id}
                id={id}
                text={text}
                completed={completed}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </div>
      </div>
      {/* use the component! */}
      <Add addHandler={addHandler}></Add>
    </div>
  );
}

export default App;
