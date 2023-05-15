import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Pages/Card";
import Home from "./Pages/Home";
import Navbar from "./component/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />



          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/card" element={<Card />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;