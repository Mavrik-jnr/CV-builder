import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <section className="cv-app">
        <div className="user-tab">
          <button id="preview">Preview Mode</button>
          <button id="edit">Edit Mode</button>
        </div>
        <main className="Resume"></main>
      </section>
    </div>
  );
}

export default App;
