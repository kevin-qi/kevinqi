import React from 'react';
import './App.css';
import { Switch , Route } from "react-router-dom";

import HomePage from './homepage'
import ProjectsPage from './pages/projects/projectspage'
import CookingPage from './pages/cooking/cookingpage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
  	</Switch>
  );
}

export default App;
