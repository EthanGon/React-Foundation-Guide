const app = document.getElementById("app");

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

function HomePage() {
  return (
    <div>
      <Header title="React" />
      <Header title="A new title" />
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
