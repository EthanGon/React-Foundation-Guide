const app = document.getElementById("app");

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  function resetClicks() {
    setLikes(0);
  }

  return (
    <div>
      <Header title="Develop. Preview. Shio" />
      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like({likes})</button>
      <button onClick={resetClicks}>Reset</button>
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
