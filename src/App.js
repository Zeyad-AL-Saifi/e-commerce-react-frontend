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
import ShoppingCartPage from "./pages/shopping-cart/ShoppingCartPage";
import AdminPage from "./pages/admin/AdminPage";
import OrdersManager from "./pages/admin/OrdersManager";
import ProductManager from "./pages/admin/ProductManager";
import AddBrand from "./pages/admin/AddBrand";
import AddCategory from "./pages/admin/AddCategory";
import AddSubCategory from "./pages/admin/AddSubCategory";
import AddCoupon from "./pages/admin/AddCobon";
import AddProduct from "./pages/admin/AddProduct";
import EditTheProduct from "./components/body/admin/ProductManagerComp/sections/EditTheProduct/EditTheProduct";

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
          <Route path='/ShoppingCartPage' element={ <ShoppingCartPage /> } />
          <Route path='Profile' element={ <ProfilePage /> }>
            <Route index element={ <ProfileInfoPage /> } />
            <Route path='/Profile/ProfileInfo' element={ <ProfileInfoPage /> } />
            <Route path='/Profile/ProfileManageOrder' element={ <ProfileManageOrderPage /> } />
            <Route path='/Profile/ProfileAddress' element={ <ProfileAddressPage /> } />
            <Route path='/Profile/ProfileFavorite' element={ <ProfileFavoritePage /> } />
          </Route>
          <Route path='Admin' element={ <AdminPage /> }>
            <Route index element={ <OrdersManager /> } />
            <Route path='/Admin/OrdersManager' element={ <OrdersManager /> } />
            <Route path='/Admin/ProductManager' element={ <ProductManager /> } />
            <Route path='/Admin/AddBrand' element={ <AddBrand /> } />
            <Route path='/Admin/AddCategory' element={ <AddCategory /> } />
            <Route path='/Admin/AddSubCategory' element={ <AddSubCategory /> } />
            <Route path='/Admin/AddCoupon' element={ <AddCoupon /> } />
            <Route path='/Admin/AddProduct' element={ <AddProduct /> } />
            <Route path='/Admin/ProductManager/Edit' element={ <EditTheProduct /> } />
          </Route>
        </Routes>


      </Router></>
  )
}

export default App;
