/* eslint-disable*/

import "./App.css";
import Deduction_apply1 from "./component/Deduction_apply1";
import Deduction_apply2 from "./component/Deduction_apply2";
import Deduction_apply3 from "./component/Deduction_apply3";
import Deduction_home from "./component/Deduction_home";
import Deduction_history from "./component/Deduction_history";
import Deduction_mypage from "./component/Deduction_mypage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Deduction_home />}></Route>
          <Route exact path="/apply1" element={<Deduction_apply1 />}></Route>
          <Route exact path="/history" element={<Deduction_history />}></Route>
          <Route exact path="/mypage" element={<Deduction_mypage />}></Route>
          <Route exact path="/apply2" element={<Deduction_apply2 />}></Route>
          <Route exact path="/apply3" element={<Deduction_apply3 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
