import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Home from "./components/Home";
import Player from "./components/Player";

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} initial hideNavBar/>
      <Scene key="player" component={Player}/> 
    </Stack>
  </Router>
);

export default App;
