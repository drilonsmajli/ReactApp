import React from "react";
import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import StartupIncubator from "./pages/StartupIncubator/StratupIcubator";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import Partnerships from "./pages/Partnerships/Partnerships";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";
import StartupAcceleration from "./pages/StartupAcceleration/StartupAcceleration";
import WhyUs from "./pages/WhyUs/WhyUs";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/startup-incubator" component={StartupIncubator} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/about" component={About} />
          <Route path="/partnerships" component={Partnerships} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/team" component={Team} />
          <Route path="/why-us" component={WhyUs} />
          <Route path="/startup-acceleration" component={StartupAcceleration} />
          <Route exact path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
