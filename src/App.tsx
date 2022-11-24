import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { 
  Counter, 
  Navbar, 
  MobxCounter, 
  RecoilCounter, 
  EffectorCounter,
  UnstatedCounter,
  ZustandCounter
} from './features';

function App() {
  return (
    <div>
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/redux-toolkit" element={<Counter />} />
          <Route path="/mobx" element={<MobxCounter />} />
          <Route path="/recoil" element={<RecoilCounter />} />
          <Route path="/effector" element={<EffectorCounter />} />
          <Route path="/unstated" element={<UnstatedCounter />} />
          <Route path="/zustand" element={<ZustandCounter />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
