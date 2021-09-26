import './App.css';
import { routes } from "./router/config";
import Router from "./router/Router";
import Nav from "./components/Nav/nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Router routes={routes} />
    </>
  );
}

export default App;
