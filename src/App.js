import React from 'react';
import './App.css';
import { Switch , Route } from "react-router-dom";
import HomePage from './home/homepage'
import ProjectsPage from './projects/projectspage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
    </Switch>
  );
}

export default App;
