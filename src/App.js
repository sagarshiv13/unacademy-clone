import { Route, Routes } from "react-router-dom";
// import "./App.css";

import { Hompage } from "./components/HomePage/HomePage";
import {PageTwo} from './components/mayur/page2'
import { Page3a } from "./components/srinivas/page-3/page3a";
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Hompage />}></Route>
        <Route path="/goal" element={<PageTwo/>}></Route>
        <Route path="/fullStack" element={<Page3a/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
