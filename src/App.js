import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Homepage from "./pages/Homepage";
import AdminDashboard from "./pages/admin/Dashboard";
import CarDetails from "./pages/admin/CarDetails";
import AddCar from "./pages/admin/AddCar";
import ViewQuotes from "./pages/admin/ViewQuotes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard" component={AdminDashboard} />
        <Route exact path="/car/:id" component={CarDetails} />
        <Route exact path="/add" component={AddCar} />
        <Route exact path="/quotes" component={ViewQuotes} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
