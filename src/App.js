import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Hompage } from "./components/HomePage/HomePage";
import {PageTwo} from './components/mayur/page2'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hompage />}></Route>
        <Route path="/goal" element={<PageTwo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
