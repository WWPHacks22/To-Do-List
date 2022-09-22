import './App.css';
// import the components
import Item from './Item';
import Add from './Add';

function App() {
  return (
    <div className="app">
      <div className="top">
        <h1 className="title">Hey there, Alex!</h1>
        <div className="list">
          <Item text="item" checked={false} id="1" />
        </div>
      </div>
      {/* use the component! */}
      <Add></Add>
    </div>
  );
}

export default App;
