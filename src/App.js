import './App.css';
// import the components
import Item from './Item';
import Add from './Add';

function App() {
  /* Notice how easily we can update the list with minimal code!
   * I encourage you to mess around with these values
   * and see what happens. You may need to reload to clear
   * some visual glitches if the keys are not unique. (see line 38)
   *
   * If we're just using HTML + JS, we would need to duplicate
   * a lot of markup. This is really good for applications
   * where we're displaying a lot of dynamic data (like from a server)
   */
  const items = [
    { text: 'abcd', completed: false, id: 'fewafe' },
    { text: 'efgh', completed: true, id: 'feijwf' },
    { text: '123', completed: false, id: '234f' },
    { text: '456', completed: false, id: '2313' },
  ];

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
            return <Item key={id} id={id} text={text} completed={completed} />;
          })}
        </div>
      </div>
      {/* use the component! */}
      <Add></Add>
    </div>
  );
}

export default App;
