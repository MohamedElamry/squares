import "./App.css";

function App() {
  let size = 6;
  let rows = [];
  for (let i = 0; i < size; i++) {
    let cols = [];
    for (let j = 0; j < size; j++) {
      cols.push(
        <div className="square col">
          {i},{j}
        </div>
      );
    }
    rows.push(<div className="square row">{cols}</div>);
  }
  return <div className="App">{rows}</div>;
}

export default App;
