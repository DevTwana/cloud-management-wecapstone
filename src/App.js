import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

{
  /* <div className="App">
     
     <MyFunction/>
     <Hero/>
     <About/>
     <Support/>
     <AllInOne/>
     <Pricing/>
     <Footer/>
     
     
         </div> */
}

export default App;
