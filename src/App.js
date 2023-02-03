import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { ComingSoon } from "./components/Pages/ComingSoon";
import { Staking } from "./components/Pages/Staking";

function App() {
  return (
    <>
      <Router>

        <div className="">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home} />
            <Route path="/staking" component={Staking} />
            <Route path="/about" component={ComingSoon} />
            <Route path="/blog" component={ComingSoon} />
            <Route path="/contact" component={ComingSoon} />
            <Route path="/comingsoon" component={ComingSoon} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
