import Header from "./components/header/Header";
import Home from "./pages/homePage/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import CategorisePage from "./pages/subHomePage/CategorisePage";

const App = () => {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/CategorisePage' element={ <CategorisePage /> } />
        </Routes>


      </Router></>
  )
}

export default App;
