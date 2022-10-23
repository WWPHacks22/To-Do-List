import './App.css';
// import the components
import Item from './Item';
import Add from './Add';

import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';

function App() {
  /*
   * Notice how easily we can update the list with minimal code!
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
     * the id that we want to delete (passed in line 26)
     *
     * (this function notation is basically shorthand for typing out the function keyword,
     * called an "arrow function")
     */

    /*
     * we can also call setItems(items.filter((el) => el.id !== id))
     * but the value of `items` might not be updated yet
     * so, we pass in a function instead, and React will give us the guaranteed current value
     * https://reactjs.org/docs/faq-state.html#:~:text=How%20do%20I%20update%20state%20with%20values%20that%20depend%20on%20the%20current%20state%3F
     */
    setItems((currentItems) => currentItems.filter((el) => el.id !== id));
  }

  function toggleHandler(id) {
    /*
     * the `map` function remaps an array
     * in line 52, we look for any element that has the id that
     * matches the id passed in line 46,
     * and we return the opposite of the current value with the
     * exclamation operator that means NOT
     * eg:
     * (!true becomes false)
     * (!false becomes true)
     */
    setItems((currentItems) =>
      currentItems.map((el) => {
        if (el.id === id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  }

  return (
    <div className="app">
      <div className="top">
        <h1 className="title">To-Do List!</h1>
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
                toggleHandler={toggleHandler}
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
