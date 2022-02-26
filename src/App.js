import { Route, Routes } from "react-router-dom";
// import "./App.css";

import { Hompage } from "./components/HomePage/HomePage";
import { PageTwo } from "./components/mayur/page2";
import { Page3a } from "./components/srinivas/page-3/page3a";
import { Page3b } from "./components/srinivas/page-3/page3b";
import { Page3c } from "./components/srinivas/page-3/page3c";
import { Payment } from "./components/srinivas/paymentPage/Payment";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hompage />}></Route>
        <Route path="/goal" element={<PageTwo />}></Route>
        <Route path="/fullStack" element={<Page3a />}></Route>
        <Route path="/programming" element={<Page3b />}></Route>
        <Route path="/campus" element={<Page3c />}></Route>
        <Route path="/plans" element={<Payment/>}></Route>
        <Route path="/products" element={}></Route>
      </Routes>
    </div>
  );
}

export default App;
