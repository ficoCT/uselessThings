import {Outlet, Link, Route} from "react-router-dom";

function App() {
  return (
      <>
        <nav>
          <Link to="/">Strona główna</Link>
        </nav>
        <Outlet />
      </>
  );
}

export default App;
