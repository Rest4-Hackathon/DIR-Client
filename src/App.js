import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Instructions2 from "./components/Instructions2";
import Instructions3 from "./components/Instructions3";
import Instructions4 from "./components/Instructions4";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path='/step-4'>
          <Instructions4 />
        </Route>
        <Route path='/step-3'>
          <Instructions3 />
        </Route>
        <Route path='/step-2'>
          <Instructions2 />
        </Route>
        <Route path='/'>
          <Instructions />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
