import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "./shared/ScrollToTop";
import AppLayout from "./shared/AppLayout";
import ErrorBoundary from "./shared/ErrorBoundary";
import {
  CART_PATH, DETAIL_PATH, HOME_PATH, SHOP_PATH, BLOG_PATH,
  SEARCH_PATH, SHOP_CATE_PATH, CHECKOUT_PATH, SHOP_SEARCH, LOGIN_PATH, TEST_PATH, SIGNUP_PATH
} from "./paths";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Shop_Category from "./pages/Shop-category";
import Checkout from "./pages/Checkout";
import Search from "./pages/Search";
// import List from "./pages/list";
// import Detail from "./pages/detail";
import Cart from "./pages/Cart";
import Login from "./pages/Login/Login_2";
import Login2 from "./pages/Login/Login";
import Signup from "./pages/Login/Sign-up";
import Blog from "./pages/Blog";

import nmbt from "./pages/Login/nmbt";
// import Search from "./pages/search";

const routers = createBrowserRouter([
  {
    path: '',
    element: (
      <>
        {' '}
        <ScrollToTop />
        <AppLayout />
      </>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: HOME_PATH,
        element: <Home />,
      },
      {
        path: SHOP_PATH,
        element: <Shop />,
      },
      {
        path: SEARCH_PATH,
        //element: <Search />,
      },
      {
        path: DETAIL_PATH,
        element: <Detail />,
      },
      {
        path: CART_PATH,
        element: <Cart />,
      },
      {
        path: SHOP_CATE_PATH,
        element: <Shop_Category />,
      },
      {
        path: SHOP_SEARCH,
        element: <Search />,
      },
      {
        path: CHECKOUT_PATH,
        element: <Checkout />,
      },
      {
        path: LOGIN_PATH,
        element: <Login2 />,
      },

      {
        path: SIGNUP_PATH,
        element: <Signup />,
      },

      {
        path: BLOG_PATH,
        element: <Blog />,
      },
     
    ],
  }
]);

export default routers;