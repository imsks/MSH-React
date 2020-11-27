import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import AdminDashboard from "./pages/admin/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard" component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
