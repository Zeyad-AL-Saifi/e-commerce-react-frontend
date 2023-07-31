import Header from "./components/header/Header";
import Home from "./pages/homePage/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import CategorisePage from "./pages/subHomePage/CategorisePage";
import ProductPage from "./pages/subHomePage/ProductPage";
import LoginPage from "./pages/authPages/LoginPage";
import SignupPage from "./pages/authPages/SignupPage";
import ProfilePage from "./pages/profile/profilePage";
import ProfileInfoPage from "./pages/profile/ProfileInfoPage";
import ProfileManageOrderPage from "./pages/profile/ProfileManageOrderPage";
import ProfileAddressPage from "./pages/profile/ProfileAddressPage";
import ProfileFavoritePage from "./pages/profile/ProfileFavoritePage";
import DetailsProductPage from "./pages/detailsProduct/DetailsProductPage";

const App = () => {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/CategorisePage' element={ <CategorisePage /> } />
          <Route path='/ProductPage' element={ <ProductPage /> } />
          <Route path='/LoginPage' element={ <LoginPage /> } />
          <Route path='/SignupPage' element={ <SignupPage /> } />
          <Route path='/DetailsProduct' element={ <DetailsProductPage /> } />
          <Route path='Profile' element={ <ProfilePage /> }>
            <Route index element={ <ProfileInfoPage /> } />
            <Route path='/Profile/ProfileInfo' element={ <ProfileInfoPage /> } />
            <Route path='/Profile/ProfileManageOrder' element={ <ProfileManageOrderPage /> } />
            <Route path='/Profile/ProfileAddress' element={ <ProfileAddressPage /> } />
            <Route path='/Profile/ProfileFavorite' element={ <ProfileFavoritePage /> } />
          </Route>
        </Routes>


      </Router></>
  )
}

export default App;
